const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-article-js": hot(preferDefault(require("/Users/muller/work/fortely_kampany/src/templates/article.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/muller/work/fortely_kampany/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/muller/work/fortely_kampany/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/muller/work/fortely_kampany/src/pages/index.js"))),
  "component---src-pages-irasaim-index-js": hot(preferDefault(require("/Users/muller/work/fortely_kampany/src/pages/irasaim/index.js"))),
  "component---src-pages-success-js": hot(preferDefault(require("/Users/muller/work/fortely_kampany/src/pages/success.js")))
}

