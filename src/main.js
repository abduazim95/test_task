// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Vue from 'vue';
import router from './router';
import App from './App';
import store from './store';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
  store
});
