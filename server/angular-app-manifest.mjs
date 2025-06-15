
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/travel-app/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/travel-app"
  },
  {
    "renderMode": 2,
    "route": "/travel-app/start"
  },
  {
    "renderMode": 2,
    "route": "/travel-app/welcome"
  },
  {
    "renderMode": 2,
    "route": "/travel-app/dashboard"
  },
  {
    "renderMode": 2,
    "route": "/travel-app/dashboard-self"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1305, hash: 'e7e613a572084dc704e1c008cd433f93bac4e61c099b517874066f66c686c9ec', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1008, hash: '06045f80b212397ae50e865ce343462a0e75f7dfb4190f5420a9b6ab26ac602b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'start/index.html': {size: 4596, hash: '8dbd89712c8f87c89b6e2363461eef0f2c1db080faac708f94a4200875b96be4', text: () => import('./assets-chunks/start_index_html.mjs').then(m => m.default)},
    'welcome/index.html': {size: 4596, hash: '8dbd89712c8f87c89b6e2363461eef0f2c1db080faac708f94a4200875b96be4', text: () => import('./assets-chunks/welcome_index_html.mjs').then(m => m.default)},
    'index.html': {size: 4596, hash: '8dbd89712c8f87c89b6e2363461eef0f2c1db080faac708f94a4200875b96be4', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 4596, hash: '8dbd89712c8f87c89b6e2363461eef0f2c1db080faac708f94a4200875b96be4', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'dashboard-self/index.html': {size: 4596, hash: '8dbd89712c8f87c89b6e2363461eef0f2c1db080faac708f94a4200875b96be4', text: () => import('./assets-chunks/dashboard-self_index_html.mjs').then(m => m.default)},
    'styles-XCMTVZAU.css': {size: 3660, hash: 'Gowq5c8exEY', text: () => import('./assets-chunks/styles-XCMTVZAU_css.mjs').then(m => m.default)}
  },
};
