import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Vuetify from 'vuetify'
import './stylus/main.styl'

Vue.use(Vuetify)

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
