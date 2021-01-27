import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

import Home from "../views/Home.vue";
import Components from "@/views/Components.vue";

Vue.use(VueRouter);

const checkbox = () => import("@/views/CheckBoxIndex.vue");

const routes: Array<RouteConfig> = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "Home",
    component: Components,
    alias: "/alias"
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
    component: checkbox
  },
  {
    path: "/getUserList",
    name: "UserList",
    component: () => import("@/views/user/userTable.vue"),
    meta: {
      requireLogin: false
    },
    beforeEnter: (to, from, next) => {
      console.log("路由内守卫，路由独享");
      console.log(to);
      console.log(from);
      next(); // 必须放行
    }
  },
  {
    path: "/getUserDetail",
    name: "UserDetail",
    props: true,
    component: () => import("@/views/user/detail.vue")
  },
  {
    path: "/menusManage",
    name: "MenusManage",
    alias: "/aliasName",
    component: () => import("@/views/manage/menus.vue"),
    children: [
      {
        // 空路由表示默认页面
        path: "",
        name: "TAB1",
        components: {
          default: () => import("@/views/manage/tab1.vue"),
          tab1: () => import("@/views/manage/tab1.vue"),
          tab2: () => import("@/views/manage/tab2.vue")
        }
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  // 进行逻辑判断，demo
  // const isLogin = localStorage.getItem("isLogin");
  // if (to.meta.requireLogin) {
  //   if (isLogin) {
  //     next();
  //   } else {
  //     next("/login");
  //   }
  // } else {
  //   next();
  // }
  // if (to.name === "login") {
  //   if (isLogin) {
  //     router.push({ name: "home" });
  //   } else {
  //     next();
  //   }
  // }
  console.log("全局前置守卫", 111);
  next();
});

router.beforeResolve((to, from, next) => {
  console.log("全局解析守卫", 222);
  console.log(to);
  console.log(from);
  next();
});

router.afterEach((to, from) => {
  console.log("全局后置守卫", 333);
  console.log(to);
  console.log(from);
});

export default router;
