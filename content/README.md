# Content Editing Guide

This guide explains where and how to edit portfolio content without touching Vue component code.

## Quick File Map

1. [profile/profile.json](profile/profile.json): profile identity, photo, contact links, intro text
2. [experiences/experiences.json](experiences/experiences.json): timeline entries
3. [projects/projects.json](projects/projects.json): project cards and links
4. [skills/skills.json](skills/skills.json): skills categories and items
5. [i18n/en.json](i18n/en.json): English UI labels
6. [i18n/fr.json](i18n/fr.json): French UI labels
7. [themes/site.json](themes/site.json): site metadata (title, default language, favicon)
8. [themes/theme.json](themes/theme.json): visual tokens (colors, fonts, spacing, shape)
9. [themes/README.md](themes/README.md): full theme/config details

## Global Rules

1. Keep valid JSON syntax (quotes, commas, braces, brackets).
2. Keep existing key names unless you also change source code.
3. Update both EN and FR blocks when possible.
4. Prefer short, readable text for export-friendly output.

## Inline Links In Rich Text

You can embed links inside supported text fields with this format:

```text
{{link:https://example.com|Link label}}
```

Supported URL formats:

1. https://
2. http://
3. mailto:
4. tel:
5. Root-relative paths like /contact

If a link is invalid, it is rendered as plain text.

## Schema Reference: profile/profile.json

### Root Fields

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| identity | object | Yes | Main personal information |
| contactLinks | array | No | Custom contact channels |
| content | object | Yes | Localized profile text blocks |

### identity

| Field | Type | Required | Example |
| --- | --- | --- | --- |
| fullName | string | Yes | John Doe |
| photo | string | No | profile/images/profile-placeholder.svg |
| email | string | Yes | you@example.com |
| portfolioUrl | string | Yes | https://example.com |

### contactLinks[]

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| label | string or object | Yes | String or localized object with en/fr |
| url | string | Yes | Full URL or mailto/tel |
| display | string | No | Custom visible text |
| includeInContactSection | boolean | No | Hidden from contact section when false |
| includeInExport | boolean | No | Hidden from export when false |

### content.en and content.fr

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| description | string | Yes | Main profile paragraph(s), supports inline links |
| exportDescription | string | Yes | Short summary used in export view |

## Schema Reference: experiences/experiences.json

File type: array of experience entries.

### experience entry

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| id | number | Yes | Stable unique number |
| content | object | Yes | Must contain en and fr blocks |

### content.en and content.fr

| Field | Type | Required | Example |
| --- | --- | --- | --- |
| period | string | Yes | June 2021 - Present |
| role | string | Yes | Senior Engineer |
| company | string | Yes | Company Name |
| location | string | Yes | City, Country |
| description | string | Yes | Short role summary |

## Schema Reference: projects/projects.json

File type: array of project entries.

### project entry

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| id | number | Yes | Stable unique number |
| content | object | Yes | Must contain en and fr blocks |
| image | string | Yes | Path relative to content/projects, usually images/... |
| technologies | string[] | Yes | Tags shown in project card/modal |
| link | string | Yes | Project URL or # |

### content.en and content.fr

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| title | string | Yes | Project title |
| description | string | Yes | Full project details |
| shortDescription | string | Yes | Card summary text |
| technologiesLabel | string | No | Modal label shown above the technologies tags |

Image folder for projects:

1. [projects/images](projects/images)

Fallback image used when a path cannot be resolved:

1. [projects/images/project-placeholder.svg](projects/images/project-placeholder.svg)

## Schema Reference: skills/skills.json

File type: array of skill categories.

### category entry

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| id | string | Yes | Stable unique key, like domainA |
| content | object | Yes | Must contain en and fr blocks |

### content.en and content.fr

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| title | string | Yes | Category label |
| items | array | Yes | Skill items list |

### item in items[]

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| text | string | Yes | Skill label |
| isJoke | boolean | No | If true, crossed out on site and excluded from export |

## Schema Reference: i18n/en.json and i18n/fr.json

Both files are nested translation dictionaries.

Rules:

1. Keep the same key structure in EN and FR.
2. Values should be strings.
3. Keep placeholders when present (example: {link}).

Example placeholder-bearing value:

```json
"templateCredit": "Original template repository: {link}"
```

## Schema Reference: themes/site.json

| Field | Type | Required | Allowed values / Example |
| --- | --- | --- | --- |
| siteTitle | string | Yes | Your Name - Portfolio |
| defaultLanguage | string | Yes | en or fr |
| faviconPath | string | Yes | /favicon.ico |

## Theme Tokens

For color, typography, spacing, and shape tokens, use:

1. [themes/theme.json](themes/theme.json)
2. [themes/README.md](themes/README.md)

## Safe Editing Workflow

1. Run npm run dev.
2. Edit one JSON file at a time.
3. Verify both EN and FR.
4. Verify the export view.
5. Commit and push once everything looks correct.
