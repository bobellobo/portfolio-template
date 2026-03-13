import rawTheme from '@content/themes/theme.json'

type ThemeVars = Record<string, string>

interface FontConfig {
  bodyFont?: string
  headingFont?: string
  googleFontsUrl?: string
  [key: string]: string | undefined
}

interface ThemeConfig {
  fonts?: FontConfig
    shape?: Record<string, string>
    spacing?: Record<string, string>
    light: ThemeVars
  dark: ThemeVars
}

function toCssVarName(camelCase: string): string {
  return '--' + camelCase.replace(/([A-Z])/g, (m) => `-${m.toLowerCase()}`)
}

function buildCssBlock(selector: string, vars: ThemeVars): string {
  const lines = Object.entries(vars)
    .filter(([key]) => !key.startsWith('_'))
    .map(([key, value]) => `  ${toCssVarName(key)}: ${value};`)
  return `${selector} {\n${lines.join('\n')}\n}`
}

export function applyThemeConfig(): void {
  const config = rawTheme as unknown as ThemeConfig

  if (config.fonts?.googleFontsUrl?.trim()) {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = config.fonts.googleFontsUrl
    document.head.appendChild(link)
  }

    const rootVars: string[] = []
    if (config.fonts?.bodyFont) rootVars.push(`  --body-font: ${config.fonts.bodyFont};`)
    if (config.fonts?.headingFont) rootVars.push(`  --heading-font: ${config.fonts.headingFont};`)

    for (const block of [config.shape, config.spacing]) {
      if (!block) continue
      for (const [key, value] of Object.entries(block)) {
        if (!key.startsWith('_') && value) rootVars.push(`  ${toCssVarName(key)}: ${value};`)
      }
    }

  const blocks: string[] = []
    if (rootVars.length > 0) blocks.push(`:root {\n${rootVars.join('\n')}\n}`)
  blocks.push(buildCssBlock(':root', config.light))
  blocks.push(buildCssBlock("[data-theme='dark']", config.dark))

  const style = document.createElement('style')
  style.id = 'portfolio-theme'
  style.textContent = blocks.join('\n\n')
  document.head.appendChild(style)
}
