import Vue from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";

// 引入ant-design-vue,全局注册
import { Button } from "ant-design-vue";
Vue.component(Button.name, Button);
// Vue.use(Button);

// 引入mock模块 api
import * as api from "@/utils/api";
Vue.prototype.$api = api;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");