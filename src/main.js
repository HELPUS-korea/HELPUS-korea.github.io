import Vue from 'vue';
import icon from 'vue-icon';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import '@babel/polyfill';

Vue.config.productionTip = false;

Vue.use(icon, 'v-icons');

new Vue({
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app');
