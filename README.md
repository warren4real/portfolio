# Warren Malawae — Portfolio

Original React + TypeScript + Vite portfolio, adapted for GitHub Pages.

## Upload and publish

1. Create a public GitHub repository named `portfolio`.
2. Extract this ZIP. Upload the **contents** of `warren-portfolio`, not the enclosing folder. `package.json` must be at the repository root.
3. Include `.github/workflows/deploy.yml` and `.gitignore`. On macOS press Command + Shift + . in Finder to show hidden files. If the browser upload skips `.github`, use GitHub's Add file > Create new file to create `.github/workflows/deploy.yml` and paste the supplied workflow.
4. Commit to `main`.
5. In the repository go to Settings > Pages > Build and deployment > Source and select **GitHub Actions**.
6. Open Actions > Deploy portfolio to GitHub Pages. If needed, click Run workflow. Wait for the workflow to succeed; the deployment link appears in the job and Settings > Pages.

A repository named `portfolio` normally publishes at `https://YOUR-USERNAME.github.io/portfolio/`.

## Run on your Mac

Install Node.js 22 or later. In this folder run:

```bash
npm ci
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

The build output is `dist/`. Source files are in `src/`; images and the downloadable résumé are in `public/`. Personal content is primarily in `src/data/profile.ts`, `src/data/portfolio.ts`, and `src/data/faqs.ts`.

GitHub Pages navigation uses hash URLs such as `/#/projects` so page refreshes work without server rewrites. Asset paths support repository subdirectories. The contact form uses the existing email-client fallback unless a contact endpoint is configured. This export does not change the original hosted website.

## License

The original template license is preserved in LICENSE. Review its terms before reuse or redistribution. Third-party dependencies retain their own licenses.
