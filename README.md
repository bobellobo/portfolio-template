Bilingual portfolio template built with Vue 3, Vite, and TypeScript.

**Live Site:** [Template preview](https://bobellobo.github.io/portfolio-template/)

This repo was templated from my own personal portfolio website, hosted on github pages.
The goal is to allow anyone to use this repo as a template to do the same, from bootstraping the website with personal config (something I'd like to implement in the future), to editing and deploying to github pages easily. 
Because most CV designer websites suck and not very customizable, plus they are not always free. 

The website also has an export feature to export all the content from the website to a pdf resume. 
The plan is to also make this customizable with personal CSS sheet dedicated to get the intended look for the pdf. 
I'll try to provide a detailed guide on how to use this template, how to deploy it to github pages easily and even how to add google analytics tags for you to monitor traffic on the page. 

## Quick Start

You need to be familiar with the basic use of github for this (basic commit+push will do), as every change you make to the template content will have to be pushed to your remote branch for the deployment to happen on github pages.

1. Use this repository as a template on GitHub. Give it a name, for example my-portfolio.

2. Clone your new repository. [If you don't know what that means click here](https://docs.github.com/fr/repositories/creating-and-managing-repositories/cloning-a-repository).


3. Install dependencies:

```bash
npm install
```

4. Run locally:

```bash
npm run dev
```
Once you run this command, you should see a local URL in the terminal (something like `http://localhost:5173/`). Open it in your browser to see the website (sometimes your code editor might open it automatically). You can now edit the content files and see the changes live in your browser. When you're happy with the changes, commit and push to your remote branch to trigger the GitHub Pages deployment (cf GitHub Pages Deployment section below).

5. Build production output:

*(You most likely won't need to use this one if you use the default GitHub Pages deployment described below. You would only need it if you want to use the production output on a custom domain)*

```bash
npm run build
```


## GitHub Pages Deployment

This repo includes a GitHub Actions workflow in `.github/workflows/deploy.yml`.

What it means is that whenever you push to the `main` (or `master`) branch, GitHub will automatically build the project and deploy the `dist` folder to GitHub Pages for you.

To deploy:

1. In your GitHub repository, go to : Settings -> Pages -> Source = GitHub Actions. 
2. Push to `main` (or `master`).
3. Wait for the workflow to publish the `dist` artifact. You will see the live url of the hosted page appear once this is done. Something like `https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME/`. You can now share this link with who you want.

Default behavior:
- On GitHub Pages project sites, the build uses `/{repo-name}/` as base path automatically.
- For root-domain or custom-domain deployments, edit `.github/workflows/deploy.yml` and set `VITE_BASE_PATH: /` in the Build step.

## Edit Content

All end-user editing docs are now centralized in markdown guides:

- [Content Editing Guide](content/README.md)
- [Theme & Config Guide](content/themes/README.md)

Basically, you don't need to touch code under the `src/` folder unless you want to add features or customize the website. If you just want to edit content, colors, fonts, just edit the JSON files under `content/` folder.

### Preset Themes Available

The project ships with multiple preset themes under `content/themes/`:

- `theme.json` (default)
- `amberVioletTheme.json`
- `earthyTheme.json`
- `neonHackerTheme.json`
- `softPastelTheme.json`

To switch presets, update the import at the top of `src/content/data/theme.ts`.

For full details about colors, typography, spacing, shapes, and theme switching, see [Theme & Config Guide](content/themes/README.md).





