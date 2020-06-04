import Vue from 'vue'
// import './plugins/axios'
import App from './App.vue'
import router from './router/index'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
