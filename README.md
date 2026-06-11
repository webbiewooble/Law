# Lawson & Partners Website

This is a modern, static website built for Lawson & Partners. 

## GitHub Pages Deployment

If you are hosting this on GitHub Pages, **ensure that the files (like `index.html`) are at the very root of your GitHub repository, not inside a subfolder like `applet/`.**

If you uploaded a folder (e.g. `applet`) instead of its contents, GitHub Pages will not find `index.html` at the root. 
**Fix:** Move all files out of the `applet` folder to the main root of your repository.

### Automatic Deployment

We have included a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically builds and deploys this site to GitHub Pages.

To use it:
1. Go to your repository on GitHub.
2. Navigate to **Settings** > **Pages**.
3. Under **Build and deployment**, set the **Source** to **GitHub Actions**.
4. The site will automatically build and deploy every time you push to the `main` branch.

### Local Development

To run the site locally:
```bash
npm install
npm run dev
```

To build for production:
```bash
npm run build
```
