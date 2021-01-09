import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

import Home from "../views/Home.vue";
import Components from "@/views/Components.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Components
  },
  {
    path: "/index",
    name: "Home3",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/components",
    name: "Component",
    component: Components
  },
  {
    path: "/button",
    name: "Button",
    component: () => import("@/views/ButtonIndex.vue")
  },
  {
    path: "/badge",
    name: "Badge",
    component: () => import("@/views/BadgeIndex.vue")
  },
  {
    path: "/checkbox",
    name: "Checkbox",
    component: () => import("@/views/CheckBoxIndex.vue")
  },
  {
    path: "/getUserList",
    name: "UserList",
    component: () => import("@/views/user/userTable.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
