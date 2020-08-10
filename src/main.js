import Vue from 'vue'
import App from './App.vue'
import BackToTop from '../dist/vue-backtop.js'
// import BackToTop from './lib/index'
Vue.use(BackToTop)
new Vue({
  el: '#app',
  render: h => h(App)
})
