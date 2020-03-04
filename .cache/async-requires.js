// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-article-js": () => import("/Users/muller/work/fortely_kampany/src/templates/article.js" /* webpackChunkName: "component---src-templates-article-js" */),
  "component---cache-dev-404-page-js": () => import("/Users/muller/work/fortely_kampany/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("/Users/muller/work/fortely_kampany/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-index-js": () => import("/Users/muller/work/fortely_kampany/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-irasaim-index-js": () => import("/Users/muller/work/fortely_kampany/src/pages/irasaim/index.js" /* webpackChunkName: "component---src-pages-irasaim-index-js" */),
  "component---src-pages-success-js": () => import("/Users/muller/work/fortely_kampany/src/pages/success.js" /* webpackChunkName: "component---src-pages-success-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/muller/work/fortely_kampany/.cache/data.json")

