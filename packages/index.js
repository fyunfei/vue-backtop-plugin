import BackToTop from "./back_to_top/src/BackToTop";
const components = [BackToTop];

const install = function(Vue) {
  if (install.installed) return;
  components.forEach(component => {
    Vue.component(component.name, component);
  });
  // 判断是否是直接引入文件
  if (typeof window !== "undefined" && window.Vue) {
    install(window.Vue);
  }
};

export default {
  install,
  BackToTop
};
