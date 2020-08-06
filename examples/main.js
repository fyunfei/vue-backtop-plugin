import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import BackToTop from "../packages/index";
Vue.config.productionTip = false;
Vue.use(BackToTop);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");