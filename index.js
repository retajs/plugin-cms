export function create ({ views = {}, prefix = '', routerOptions = {} } = {}) {
  const { routes = [] } = routerOptions
  prefix = prefix.replace(/(^\/+)|(\/+$)/g, '').replace(/(.+)/g, '$1/')
  routerOptions.routes = routes.concat([
    {
      path: `/${prefix}article/:id`,
      component: views.Article || () => import(/* webpackChunkName: "plugin-cms-article" */ './views/Article'),
    },
    {
      path: `/${prefix}category/:id`,
      component: views.Category || () => import(/* webpackChunkName: "plugin-cms-category" */ './views/Category'),
    },
    {
      path: `/${prefix}tag/:id`,
      component: views.Tag || () => import(/* webpackChunkName: "plugin-cms-tag" */ './views/Tag'),
    },
  ])
}