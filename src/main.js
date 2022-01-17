//Import Css
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import VueBootstrap from 'bootstrap-vue';
import 'bootstrap-vue/dist/bootstrap-vue.css';

//Import Fontawesome
import './assets/css/all.css';

//import env
// import env from './env.js';

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//Axios
// import Axios from 'axios'
// Axios.defaults.baseURL = env.urlStart;
// Vue.prototype.$http = Axios; // to run axios, just use this.$http

Vue.use(VueBootstrap);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
