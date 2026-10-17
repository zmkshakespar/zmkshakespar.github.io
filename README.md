# Mengke Zhang · Academic Homepage

Personal academic website at <https://zmkshakespar.github.io/>, with English and Chinese pages. The homepage uses a lightweight editorial layout: warm paper colors, serif headings, publication figures, and responsive navigation. It runs on the existing GitHub Pages / Jekyll setup without a frontend build step or external font dependencies.

## Updating content

- `_data/homepage.yml` contains both languages, news, publications, research and education experience, skills, competitions, and honors. Update matching `en` and `zh` fields together.
- `_config.yml` supplies the contact email and GitHub username.
- `_pages/about.md` and `_pages/about_zh.md` select the shared layout and define `/` and `/zh/`. The existing `/about/` and `/about.html` redirects are retained.
- `_layouts/academic.html` contains the homepage structure and navigation.
- `assets/css/academic.css` controls typography, colors, responsive layouts, and print styles.
- `assets/js/academic.js` handles publication filters, compact list mode, and navigation highlighting. All publication content remains readable without JavaScript.
- `images/` and `files/` retain profile photos, publication figures, organization logos, certificates, papers, and the CV.

Each publication has a stable `id`, `category` (`vision` or `audio`), venue, authors, bilingual summary, figure, and resource links. Use complete HTTPS URLs for external resources and root-relative paths for local PDFs. Keep repository release notes accurate when linking implementations that are pending release.

The footer update date is in `_data/homepage.yml` (`ui.en.update_date` and `ui.zh.update_date`); its machine-readable date is in `_layouts/academic.html`.

## Local development

Install Ruby and Bundler, then run:

```sh
bundle install
bundle exec jekyll serve
```

Open <http://127.0.0.1:4000/> and <http://127.0.0.1:4000/zh/>. To generate the production site:

```sh
bundle exec jekyll build
```

The new homepage stylesheet and script are used directly; no npm build is required. Older AcademicPages layouts and their assets remain available for other pages.

## Deployment

GitHub Pages builds from the root of the `main` branch. Push content changes to that branch and check the Pages build/deployment result before assuming the live website has updated. The separate OpenDepth project site remains at <https://zmkshakespar.github.io/OpenDepth/>.

## License and attribution

MIT License; see `LICENSE`. The repository retains its original AcademicPages/Jekyll theme components. The earlier WowPage template originated from [selen-suyue.github.io](https://selen-suyue.github.io/), based on [AcademicPages](https://github.com/academicpages/academicpages.github.io).
