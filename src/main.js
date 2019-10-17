import Vue from 'vue';
/* Do you need Vuex? */
import Vuex from 'vuex';
import { STORE } from './store/store.js';
/* Do you need Vuex? -end */

/* Do you need VueRouter? */
import { sync } from 'vuex-router-sync';
import VueRouter from 'vue-router';
/* Do you need VueRouter? -end */

import App from './App.vue';
import routes from './routes.js';


Vue.use(Vuex);/* Do you need Vuex? */
Vue.use(VueRouter);/* Do you need Vuex? */

/* Do you need VueRouter? */
const router = new VueRouter({
  mode: 'history',
  routes: routes,
  linkActiveClass: 'active'
});
/* Do you need VueRouter? -end */

const store = new Vuex.Store(STORE);/* Do you need Vuex? */

sync(store, router);/* Are you syncing store and router? */

new Vue({
  store, /* Do you need Vuex? */
  router, /* Do you need VueRouter? */
  render(createElement) {
    return createElement(App, {});
  }
}).$mount('#app');
