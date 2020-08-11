import BackToTop from "./src/BackToTop.vue";
const install = function(Vue){
  Vue.component(BackToTop.name, BackToTop);
  if (typeof window !== "undefined" && window.Vue) {
    install(window.Vue);
  }
}
export default {
  install
};
