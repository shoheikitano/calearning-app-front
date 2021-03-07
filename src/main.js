import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import axios from 'axios'
import VueAxios from 'vue-axios' 

Vue.config.productionTip = false



Vue.use(VueAxios, axios)

axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

new Vue({
  
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
