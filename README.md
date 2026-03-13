Bilingual portfolio template built with Vue 3, Vite, and TypeScript.

Live site: [Template preview](https://bobellobo.github.io/portfolio-template/)

This repo was templated from my own personal portfolio website, hosted on github pages.
The goal is to allow anyone to use this repo as a template to do the same, editing and deploying to github pages easily. 
Because most CV designer websites suck and not very customizable, plus they are not always free. 

The website also has an export feature to export all the content from the website to a pdf resume.


Below is a quickstart guide to get you up and running, and details on how to edit the content and theme of the website without touching any code.

The requisites are : 
- having an existing GitHub account to use this repo as a template for creating your own.
- basic use of github for this ( basic commit + push will do ). Every change you make to the template content will have to be pushed to your remote branch to be deployed on github pages.

## 5-Minute Quickstart

1. Use this repository as a template on GitHub. (Click "Use this template" button on the repo page and follow the instructions to create your own repository based on this template. Name it as you wish, for example "my-portfolio").


2. Clone your new repository from its URL (if you don't what that means, click [here](https://docs.github.com/fr/repositories/creating-and-managing-repositories/cloning-a-repository)).
On your desktop or in your code editor terminal, run this command (replace `YOUR_USERNAME` and `YOUR_REPOSITORY_NAME` with your actual GitHub username and repository name):
```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
```
3. In the same terminal change directory: 
```bash
cd YOUR_REPOSITORY_NAME
```
You can now install all the dependencies with npm (make sure you have Node.js and npm installed on your machine):
```bash
npm install
```

4. Start local dev server:

```bash
npm run dev
```
Once you run this command, you should see a local URL in the terminal (something like `http://localhost:5173/`). 
Open it in your browser to see the website (sometimes your code editor might open it automatically). 
You can now edit the content files and see the changes live in your browser.

This is just the local version of the website, it is not live on the internet yet. To make it live, we still need to deploy it using GitHub pages. So let's configure that next.


5. GitHub Pages Deployment

This repo includes a GitHub Actions workflow file in `.github/workflows/deploy.yml`.

What it means is that whenever you push to the `main` (or `master`) branch, GitHub will automatically build the project and deploy the `dist` folder to GitHub Pages for you, hosting your website live.

To configure, simply go to your GitHub repository, then to : Settings -> Pages -> Source = GitHub Actions. 

So when you're happy with the changes you have made locally, just push to `main` (or `master`) and wait for the workflow to publish the `dist` artifact. 
You will see the live url of the hosted page appear once this is done. Something like `https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME/`. Congratulations, your site is now live! You can now share this link with who you want.


Default behavior:
- On GitHub Pages project sites, the build uses `/{repo-name}/` as base path automatically.
- For root-domain or custom-domain deployments, edit `.github/workflows/deploy.yml` and set `VITE_BASE_PATH: /` in the Build step.

----------------------------


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


