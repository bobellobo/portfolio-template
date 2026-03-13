Bilingual portfolio template built with Vue 3, Vite, and TypeScript.

Live site: [Template preview](https://bobellobo.github.io/portfolio-template/)

This repo was templated from my own personal portfolio website, hosted on github pages.
The goal is to allow anyone to use this repo as a template to do the same, from bootstraping the website with personal config (something I'd like to implement in the future), to editing and deploying to github pages easily. 
Because most CV designer websites suck and not very customizable, plus they are not always free. 

The website also has an export feature to export all the content from the website to a pdf resume. 
The plan is to also make this customizable with personal CSS sheet dedicated to get the intended look for the pdf. 
I'll try to provide a detailed guide on how to use this template, how to deploy it to github pages easily and even how to add google analytics tags for you to monitor traffic on the page. 

You'll  need to be familiar with the basic use of github for this (basic commit+push will do), as every change you make to the template content will have to be pushed to your remote branch for the deployment to happen on github pages.

## 5-Minute Quickstart

1. Use this repository as a template on GitHub.
2. Clone your new repository.
3. Install dependencies:

```bash
npm install
```

4. Start local dev server:

```bash
npm run dev
```
Once you run this command, you should see a local URL in the terminal (something like `http://localhost:5173/`). 
Open it in your browser to see the website (sometimes your code editor might open it automatically). You can now edit the content files and see the changes live in your browser. 
When you're happy with the changes, commit and push to your remote branch to trigger the GitHub Pages deployment (cf GitHub Pages Deployment section below).

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

## What To Edit (No Code Needed)

Most users only need to edit JSON files under [content](content). 
You usually do not need to change files in src. You can obviously do it if you want to customize the website further, but the content files are designed to be edited without touching code.

| Goal | File to edit |
| --- | --- |
| Name, profile image, email, links, intro text | [content/profile/profile.json](content/profile/profile.json) |
| Work experience entries | [content/experiences/experiences.json](content/experiences/experiences.json) |
| Skills and categories | [content/skills/skills.json](content/skills/skills.json) |
| Project cards and project details | [content/projects/projects.json](content/projects/projects.json) |
| Site-level labels/settings | [content/themes/site.json](content/themes/site.json) |
| Theme tokens (colors, spacing, typography) | [content/themes/theme.json](content/themes/theme.json) |
| English UI text | [content/i18n/en.json](content/i18n/en.json) |
| French UI text | [content/i18n/fr.json](content/i18n/fr.json) |

## Theme Presets

Available presets in [content/themes](content/themes):

1. [content/themes/theme.json](content/themes/theme.json) (default)
2. [content/themes/amberVioletTheme.json](content/themes/amberVioletTheme.json)
3. [content/themes/earthyTheme.json](content/themes/earthyTheme.json)
4. [content/themes/neonHackerTheme.json](content/themes/neonHackerTheme.json)
5. [content/themes/softPastelTheme.json](content/themes/softPastelTheme.json)

To switch presets, update the import at the top of `src/content/data/theme.ts`.
For full theme and token details, see [content/themes/README.md](content/themes/README.md).

For content editing details, see [content/README.md](content/README.md).

## Common mistakes 

1. Invalid JSON (extra comma, missing quote) breaks parsing.
2. Wrong image path under [content](content) causes missing images.
3. Updating only one locale can make text inconsistent between EN/FR.
4. Very long text can impact layout and export readability.

### Analytics
You could also add your Google Analytics tracking ID in the index.html file to monitor traffic on your portfolio page.
There are other analytics tools, like Plausible for example. But since Google Analytics is the most widely used, here is how to add it : 

1. Create a Google Analytics account and get your tracking ID (something like `G-XXXXXXXXXX`).
2. Open `index.html` and add the following code snippet in the `<head>` section, replacing `G-XXXXXXXXXX` with your actual tracking ID:

```html
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)};
  gtag('js', new Date());

  gtag('config', 'G-XXXXXXXXXX');
</script>
```

3. Save the file and push your changes to GitHub.

Your analytics should now be active and you can monitor traffic on your portfolio page on the Google Analytics dashboard. It may take some time to actually see all the data coming. 
But what you do to test if your analytics flow is correclty wired is to open your portfolio page (in an incognito tab and without AdBlock) and go to the Reports > Real-time section of your Google Analytics dashboard. You should see at least one active user (yourself) on the page.
Then wait 24 to 48 hours so see more detailed analytics data about your website. 
You can track a lot of differents metrics and even set up custom events to track, or alers. 
For example, you could track the source of the traffic : social media like Linkedin, or "Direct" which means people who direclty clicked on the link without coming from another website (if they clicked it on your resume for example). 
