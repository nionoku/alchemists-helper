import Vue from 'vue';
import App from '@/views/App.vue';
import vuetify from './plugins/vuetify';
import '@/assets/style/main.scss';

// import '@/config/registerServiceWorker';

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app');
