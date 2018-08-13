import Vue from 'vue';
import Router from 'vue-router';
import PageHome from '@/components/pages/PageHome';
import Forum from '@/components/pages/PageForum';
import PageThreadShow from '@/components/pages/PageThreadShow';
import PageNotFound from '@/components/pages/PageNotFound';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PageHome',
      component: PageHome,
    },
    {
      path: '/thread/:id',
      name: 'PageThreadShow',
      component: PageThreadShow,
      props: true,
    },
    {
      path: '/forum/:id',
      name: 'Forum',
      component: Forum,
      props: true,
    },
    {
      path: '*',
      name: 'PageNotFound',
      component: PageNotFound,
    },
  ],
  mode: 'history',
});
