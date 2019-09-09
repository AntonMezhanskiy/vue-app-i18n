import { Trans } from '@/plugins/Translation';
import RouterView from '@/components/RouterView.vue';

function load(component) {
  // '@' is aliased to src/pages
  return () => import(/* webpackChunkName: "[request]" */ `@/pages/${component}.vue`);
}

export default [
  {
    path: '/:lang',
    component: RouterView,
    beforeEnter: Trans.routeMiddleware,
    children: [
      {
        path: '',
        name: 'home',
        component: load('Home'),
      },
      {
        path: 'about',
        name: 'about',
        component: load('About'),
      },
      {
        path: 'login',
        name: 'login',
        component: load('Login'),
      },
      {
        path: '*',
        component: load('404'),
      },
    ],
  },
  {
    // Redirect user to supported lang version.
    path: '*',
    redirect(to) {
      return Trans.getUserSupportedLang();
    },
  },
];
