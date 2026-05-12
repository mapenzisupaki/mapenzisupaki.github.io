# Mapenzi Supaki Personal Website

This is a Vite + React personal brand site for Mapenzi Supaki, positioned around:

> I help companies use AI, analytics, and customer intelligence to build better digital products, experiences, and decision systems.

The site is static and GitHub Pages-friendly.

## Run Locally

```bash
npm install
npm run dev
```

Open `http://127.0.0.1:5173/`.

## Build

```bash
npm run build
```

The production files are generated in `dist/`.

## Update Profile Copy

Edit `src/data/siteData.js`.

Update:

- `profile.name`
- `profile.role`
- `profile.narrative`
- `profile.intro`
- `profile.email`
- `profile.bookingUrl`
- `profile.cvUrl`
- `profile.socials`
- `profile.avatar`

## Update Projects

Projects live in the `projects` array in `src/data/siteData.js`.

Each project needs:

- `slug`: URL-friendly ID, for example `ai-product-intelligence-assistant`
- `title`
- `category`
- `year`
- `summary`
- `image`
- `challenge`
- `outcome`

The detail page URL is `/work/YOUR-SLUG`.

To add a project, duplicate one object in the `projects` array, paste it at the
top or bottom of the array, and change the fields:

```js
{
  slug: "new-project-slug",
  title: "New Project Title",
  category: "Product Analytics, AI, SaaS",
  year: "2026",
  summary: "One short paragraph for the project card.",
  image: "/project-image.jpg",
  challenge: "What problem the project addressed.",
  outcome: "What changed, improved, or was learned.",
}
```

Use a unique `slug`. That slug becomes the project URL.

## Update Blog Posts

Blog posts live in the `posts` array in `src/data/siteData.js`.

Each post needs:

- `slug`
- `title`
- `category`
- `date`
- `excerpt`
- `image`
- `body`: an array of paragraph strings

The detail page URL is `/blog/YOUR-SLUG`.

To add a post, duplicate one object in the `posts` array and update the fields:

```js
{
  slug: "new-blog-post",
  title: "New Blog Post Title",
  category: "Through My Data Lens",
  date: "May 2026",
  excerpt: "One short summary for the blog card.",
  image: "/blog-image.jpg",
  body: [
    "First paragraph.",
    "Second paragraph.",
    "Third paragraph.",
  ],
}
```

The Blog page title is **Through My Data Lens™**. Posts can use any category,
but keeping product strategy, causal analysis, customer behavior, responsible AI,
and practical analytics adoption themes will keep the brand consistent.

## Update Images

Replace any `image` or `avatar` URL in `src/data/siteData.js`.

You can use:

- hosted images
- local files placed in `public/`

For local files, use paths like `/my-image.jpg`.

## Update Contact Links

The contact form uses `mailto:` and prepares an email using `profile.email`.

Update:

- email: `profile.email`
- discovery call: `profile.bookingUrl`
- LinkedIn/GitHub/Medium: `profile.socials`

## Update Resume And CV

The Resume page at `/resume` uses `resumeFocus` for the Strategic Focus tabs and `dataExperience` for the timeline cards.

Update:

- strategic tabs: `resumeFocus`
- experience timeline: `dataExperience`
- tool stack slider: `skills`
- CV download link: `profile.cvUrl`

The current CV button points to a Google Drive direct-download link. Make sure the file sharing setting allows visitors to access it.

## Update Icons And Font

Icons are local inline SVGs in `src/components/Icons.jsx`, so the site does not depend on an external icon package.

To change which icon appears beside a link or card, edit:

- Sidebar/nav icons: `src/components/Layout.jsx`
- Section/card/contact icons: `src/components/Sections.jsx` and `src/pages/Contact.jsx`

The site uses **Manrope** as a Meeko-inspired rounded font. To change it, update the `@import` and `font-family` values in `src/styles.css`.

## Deploy To GitHub Pages

For your user site, create a GitHub repository named:

```bash
mapenzisupaki.github.io
```

Keep `base: "/"` in `vite.config.js`; this is already configured for a domain-root
GitHub Pages site.

This project includes a GitHub Actions workflow at
`.github/workflows/deploy.yml`. It builds the Vite site and deploys `dist/` to
GitHub Pages whenever you push to `main`.

First-time setup:

```bash
git init
git branch -M main
git add .
git commit -m "Initial personal website"
git remote add origin https://github.com/mapenzisupaki/mapenzisupaki.github.io.git
git push -u origin main
```

Then in GitHub:

- Open the `mapenzisupaki.github.io` repository.
- Go to **Settings > Pages**.
- Under **Build and deployment**, choose **GitHub Actions**.
- Wait for the workflow to finish.
- Your site will be available at `https://mapenzisupaki.github.io/`.

To preview locally before pushing:

```bash
npm run build
npm run preview
```

The included `public/404.html` supports refreshing deep React routes on GitHub Pages.
