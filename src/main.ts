import Vue from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";

// 引入mockjs
import "./mock/index";

/**
 * 全局引入iconfont
 */
import "@/assets/css/var.css";
import "@/assets/iconfont/iconfont.css";
/**
 * 引入ant-design-vue,全局注册
 */
import { Button, Table, Spin } from "ant-design-vue";
Vue.component(Button.name, Button);
Vue.component(Table.name, Table);
Vue.component(Spin.name, Spin);
// Vue.use(Button);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
