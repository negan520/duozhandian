// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './config/rem';
import axios from 'axios';
import VueCookies from 'vue-cookies';
// WebSocket封装方法
import store from './store/index'
axios.defaults.withCredentials=true;
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;
Vue.use(VueCookies);
Vue.$cookies.config('7d');
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
