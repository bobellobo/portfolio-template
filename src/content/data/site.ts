import rawSite from '@content/themes/site.json'

interface SiteConfig {
  siteTitle: string
  defaultLanguage: string
  faviconPath: string
}

const siteConfig = rawSite as SiteConfig

export function getSiteDefaultLanguage(): 'en' | 'fr' {
  return siteConfig.defaultLanguage === 'fr' ? 'fr' : 'en'
}

export function applySiteConfig(): void {
  if (siteConfig.siteTitle) {
    document.title = siteConfig.siteTitle
  }

  if (siteConfig.defaultLanguage) {
    document.documentElement.lang = siteConfig.defaultLanguage
  }

  if (siteConfig.faviconPath) {
    const existing = document.querySelector<HTMLLinkElement>('link[rel="icon"]')
    if (existing) {
      existing.href = siteConfig.faviconPath
    } else {
      const link = document.createElement('link')
      link.rel = 'icon'
      link.href = siteConfig.faviconPath
      document.head.appendChild(link)
    }
  }
}
