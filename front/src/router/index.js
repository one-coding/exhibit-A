import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Exhibit from "../views/Exhibit.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/about",
      name: "About",
      component: About,
    },
    {
      path: "/exhibit",
      name: "Exhibit",
      component: Exhibit,
    },
    {
      path: "/exhibit/:id",
      name: "showExhibit",
      component: Exhibit,
    },
  ],
});

export default router;
