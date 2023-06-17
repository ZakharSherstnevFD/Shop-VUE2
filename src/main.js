import Vue from 'vue'
import App from './App.vue'

import router from './routes'
import store from './store'

import VueCarousel from 'vue-carousel'
Vue.use(VueCarousel)

import './assets/style/main.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) },
}).$mount('#app')
