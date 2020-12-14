/**
 * 引入Http封装类
 */
import http from "@/utils";

// base 的值要和 vue.config.js 中设置的proxy保持一致。
const base = "/api";

export const getUsers = () => {
  return http.get(`${base}/getUsers/lists`);
};
export const getMenu = () => {
  return http.post(`${base}/getMenus/`);
};
