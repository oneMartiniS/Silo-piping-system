import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router/index.js'
import  axios from 'axios'
import qs from 'qs'
Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.qs = qs
new Vue({
  router: router,
  render: h => h(App)
}).$mount("#app");