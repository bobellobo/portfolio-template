# Configuration

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

## `alternativeTheme.json` — Example alternative theme

A ready-made alternative theme (warm amber/slate in light mode, deep violet in dark mode) provided as a starting point. To activate it, open `src/content/data/theme.ts` and change line 1:

```ts
// from
import rawTheme from '@content/config/theme.json'

// to
import rawTheme from '@content/config/alternativeTheme.json'
```

You can also duplicate either file, rename it, and point the import to your own file to create a fully custom theme.
