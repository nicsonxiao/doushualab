import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import Shopping from "../views/Shopping.vue";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home
  // },
  // {
  //   path: "/about",
  //   name: "About",
  //   component: () =>
  //     import("../views/About.vue")
  // },
  {
    path: "/",
    name: "Shopping",
    component: Shopping,
    meta:{
      title:"豆刷实验室"
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
