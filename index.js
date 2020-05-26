module.exports = {
  create ({ views = {}, prefix = '', routerOptions = {} } = {}) {
    const { routes = [] } = routerOptions
    prefix = prefix.replace(/(^\/+)|(\/+$)/g, '').replace(/(.+)/g, '$1/')
    routerOptions.routes = routes.concat([
      {
        path: `/${prefix}article/:id`,
        component: views.Article || {
          functional: true,
          render: c => c('h1', 'Article page')
        },
      },
      {
        path: `/${prefix}category/:id`,
        component: views.Category || {
          functional: true,
          render: c => c('h1', 'Category page')
        },
      },
      {
        path: `/${prefix}tag/:id`,
        component: views.Tag || {
          functional: true,
          render: c => c('h1', 'Tag page')
        },
      },
    ])
  }
}