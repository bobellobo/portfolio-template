# Themes And Site Settings

This folder contains all the configuration files for your portfolio. You can customize the site's appearance and behaviour by editing these JSON files — no code knowledge required.

---

## `site.json` — Global site settings

| Field | What it does |
|---|---|
| `siteTitle` | The text shown in the browser tab (e.g. `"Jane Doe — Portfolio"`) |
| `defaultLanguage` | The language shown to first-time visitors with no stored preference. Accepts `"en"` or `"fr"` |
| `faviconPath` | Path to the favicon file relative to the site root (e.g. `"/favicon.ico"` or `"/my-icon.png"`) |

---

## `theme.json` — Colors and fonts

This is the active theme file loaded by the site.

### `fonts`

| Field | What it does |
|---|---|
| `bodyFont` | Font stack used for all body text (e.g. `"'Geist Mono', monospace"`) |
| `headingFont` | Font stack used for headings (`h1`, `h2`, `h3`) |
| `googleFontsUrl` | The Google Fonts stylesheet URL to load the above fonts. Set to `""` if you want to use system fonts or self-host |

### `shape`

| Field | What it controls |
|---|---|
| `radiusPill` | Navbar bar, language selector, theme toggle, circular icon buttons. Set to `9999px` for a floating pill navbar, or a small value (e.g. `0.6rem`) for a rectangular bar |
| `radiusLg` | Modal windows, mobile nav dropdown |
| `radiusMd` | Content cards, dropdown menu items, nav link hover backgrounds |
| `radiusSm` | Primary and secondary action buttons, tooltips |
| `radiusTag` | Skill/technology tag chips. Set to `0px` for sharp rectangular tags |

### `spacing`

| Field | What it controls |
|---|---|
| `sectionPaddingY` | Vertical padding applied to every section block. The value is scaled proportionally at smaller screen sizes. Use a larger value (e.g. `8rem`) for an airy layout or smaller (e.g. `4rem`) for a denser one |

### `light` and `dark`

Each block defines the color palette for light and dark mode respectively. All values accept any valid CSS color (`#rrggbb`, `rgb()`, `rgba()`, `hsl()`, etc.).

| Field | What it controls |
|---|---|
| `primaryColor` | Main accent color (buttons, links, highlights) |
| `secondaryColor` | Darker variant of the primary, used for hover states |
| `textDark` | Primary text color |
| `textLight` | Secondary/muted text color |
| `bgLight` | Light background used in some sections |
| `bgWhite` | White-equivalent background |
| `surfacePage` | Overall page background |
| `surfaceSection` | Background of content sections |
| `surfaceSectionMuted` | Slightly dimmed section background |
| `surfaceHeader` | Navigation bar background |
| `surfaceNavbar` | Inner navbar surface |
| `borderColor` | Color of dividers and card borders |
| `shadow` / `shadowLg` | Box shadow values for cards and elements |
| `textOnBrand` | Text color on top of primary-colored backgrounds |
| `heroSubtext` | Text color for the hero section subtitle |
| `footerBg` | Footer background color |
| `footerText` | Footer text color |
| `projectPlaceholderStart` / `projectPlaceholderEnd` | Gradient colors for project cards without an image |
| `overlayColor` | Color of modal/image overlays |
| `focusRing` | Color of the keyboard focus outline |

---

## `amberVioletTheme.json` — Amber/violet theme

A warm amber/slate light mode paired with a deep violet dark mode, using **Inter + Playfair Display** fonts.

## `earthyTheme.json` — Terracotta/espresso theme

A warm editorial theme with a cream/terracotta light mode and a deep espresso/coral dark mode, using **Lora + Raleway** serif fonts. Drastically different in character from the blue/tech look of the default theme.

## `neonHackerTheme.json` — Neon hacker/cyberpunk theme

A high-contrast cyber style with glowing green accents on dark mode and electric cyan on light mode, using **Space Grotesk + Orbitron** for futuristic styling with better paragraph readability.

## `softPastelTheme.json` — Soft pastel/editorial theme

A very airy and rounded theme with pink pastel tones and spacious section rhythm, using **Nunito Sans + Cormorant Garamond**.

To activate any of these alternative themes, open `src/content/data/theme.ts` and change line 1:

```ts
// default
import rawTheme from '@content/themes/theme.json'

// amber/violet
import rawTheme from '@content/themes/amberVioletTheme.json'

// terracotta/espresso
import rawTheme from '@content/themes/earthyTheme.json'

// neon hacker
import rawTheme from '@content/themes/neonHackerTheme.json'

// soft pastel
import rawTheme from '@content/themes/softPastelTheme.json'
```

You can also duplicate any of these files, rename it, and point the import to your own file to create a fully custom theme.
