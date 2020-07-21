import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import api from "@/assets/common/js/api";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "@/assets/common/js/date.js";


Vue.use(ElementUI);
Vue.prototype.$api = api;
Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next();
})

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
