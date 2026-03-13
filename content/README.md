# Content Editing Guide

This guide explains exactly where and how to edit your portfolio content without touching component code.

## What You Can Edit

All user-editable data lives in this `content/` folder.

- `profile/profile.json`: identity, contact links, profile text, export summary, profile image path
- `experiences/experiences.json`: experience timeline entries
- `projects/projects.json`: project cards (title, description, tags, image, links)
- `skills/skills.json`: skill categories and list items
- `i18n/en.json`: English interface labels
- `i18n/fr.json`: French interface labels
- `themes/site.json`: browser tab title, default language, favicon
- `themes/theme.json`: active theme values
- `themes/README.md`: detailed theme/config documentation and preset theme list

## Content File Rules

- Keep valid JSON syntax: quotes, commas, braces, and brackets matter.
- Keep the same structure and field names unless you also update code.
- Most text fields support plain text.
- Some text fields also support inline link tags (see below).

## Inline Links In Text Fields

You can embed links in text fields rendered through rich text components.

Format:

```text
{{link:https://example.com|Link label}}
```

Supported protocols:

- `https://`
- `http://`
- `mailto:`
- `tel:`
- root-relative links like `/some-page`

If a link is invalid, it is displayed as plain text.

## Profile Editing

Edit `profile/profile.json`:

- `identity.fullName`: displayed in header/export
- `identity.photo`: path under `content/` (example: `profile/images/profile-placeholder.svg`)
- `contactLinks`: fully customizable channels
- `content.en.description` / `content.fr.description`: main profile section text
- `content.en.exportDescription` / `content.fr.exportDescription`: export view summary

### Contact Links

Each `contactLinks` item supports:

- `label`: either a string or localized object (`{ "en": "...", "fr": "..." }`)
- `url`: target link
- `display` (optional): display text in export
- `includeInContactSection` (optional): hide from website contact section when `false`
- `includeInExport` (optional): hide from export view when `false`

## Experience Editing

Edit `experiences/experiences.json` entries:

- `period`
- `role`
- `company`
- `location`
- `description`

Each entry has both `en` and `fr` content blocks.

## Project Editing

Edit `projects/projects.json` entries:

- `title`
- `description`
- `shortDescription`
- `image`
- `technologies` (tags)
- `link`

### Project Images

Project images are expected under:

- `content/projects/images/`

Current default image is:

- `content/projects/images/project-placeholder.svg`

If an image path is missing/invalid, the app uses the same SVG fallback in `content/projects/images/`.

## Skills Editing

Edit `skills/skills.json` by category.

Each item supports:

- `text`
- `isJoke` (optional boolean)

Behavior:

- If `isJoke: true`, the item is shown crossed out in the normal website view.
- Joke items are automatically excluded from the export resume view.

## Language Labels (UI Text)

Edit:

- `i18n/en.json`
- `i18n/fr.json`

Use these files for section titles, button labels, footer text, export labels, etc.

## Themes And Visual Settings

Theme and global visual config are documented in:

- `content/themes/README.md`

That file explains:

- active theme structure (`theme.json`)
- site settings (`site.json`)
- all available preset themes
- how to switch themes

## Safe Editing Workflow

1. Run locally (`npm run dev`).
2. Edit JSON files under `content/`.
3. Refresh and verify both EN/FR views.
4. Verify export view (`/export` or export mode in app).
5. Commit and push.
