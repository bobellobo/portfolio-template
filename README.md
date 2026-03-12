Bilingual portfolio template built with Vue 3, Vite, and TypeScript.

**Live Site:** Set this to your deployed GitHub Pages URL.

This repo was templated from my own personal portfolio website, hosted on github pages.
The goal is to allow anyone to use this repo as a template to do the same, from bootstraping the website with personal config, to editing and deploying to github pages easily. 
Because most CV designer websites suck and not very customizable, plus they are not always free. 

The website also has an export feature to export all the content from the website to a pdf resume. 
The plan is to also make this customizable with personal CSS sheet dedicated to get the intended look for the pdf. 
I'll try to provide a detailed guide on how to use this template, how to deploy it to github pages easily and even how to add google analytics tags for you to monitor traffic on the page. 

## Quick Start

1. Use this repository as a template on GitHub.
2. Clone your new repository.
3. Install dependencies:

```bash
npm install
```

4. Run locally:

```bash
npm run dev
```

5. Build production output:

```bash
npm run build
```

## Edit Content

Edit these files only (no component code needed for basic customization):

- `content/profile/profile.json`: name, email, social links, intro text.
- `content/experiences/experiences.json`: work history.
- `content/projects/projects.json`: project cards and links.
- `content/skills/skills.json`: skill categories.
- `content/i18n/en.json`: English UI labels.
- `content/i18n/fr.json`: French UI labels.

Project images live in `content/projects/images/`.

### Inline Links In JSON Text

You can embed links directly in any JSON text field that is rendered through the app.

Tag format:

```text
{{link:https://example.com|Link label}}
```

Example inside `content/profile/profile.json`:

```json
{
	"description": "I studied at {{link:https://example.edu|Your University}} and focus on product engineering."
}
```

Notes:
- Supported protocols are `https://`, `http://`, `mailto:`, `tel:`, and root-relative `/` links.
- Invalid link tags are rendered as plain text.

## GitHub Pages Deployment

This repo includes a GitHub Actions workflow in `.github/workflows/deploy.yml`.

Default behavior:
- On GitHub Pages project sites, the build uses `/{repo-name}/` as base path automatically.
- For root-domain or custom-domain deployments, edit `.github/workflows/deploy.yml` and set `VITE_BASE_PATH: /` in the Build step.

To deploy:

1. Push to `main` (or `master`).
2. In GitHub: Settings -> Pages -> Source = GitHub Actions. 
3. Wait for the workflow to publish the `dist` artifact.


