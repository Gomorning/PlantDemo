import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.prototype.$axios = axios // 设置axios
Vue.config.productionTip = false
axios.defaults.headers.post['Content-Type'] = 'application/json'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
