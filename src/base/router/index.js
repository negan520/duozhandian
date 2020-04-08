import Vue from 'vue'
import Router from 'vue-router'
const VueRouterPush = Router.prototype.push;
const VueRouterReplace = Router.prototype.replace;
Router.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
};
Router.prototype.replace = function replace (to) {
  return VueRouterReplace.call(this, to).catch(err => err)
};
Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: 'home',
      component:resolve => require(['@/base/views/home/home'],resolve)
    },
    {
      path: '/home',
      name: 'home',
      component:resolve => require(['@/base/views/home/home'],resolve)
    },
  ]
})
