import axios from "axios";

// base 的值要和 vue.config.js 中设置的proxy保持一致。
const base = "/api";

export const getUsers = () => {
  return axios.get(`${base}/getUsers/lists`);
};
export const getMenu = () => {
  return axios.get(`${base}/getMenus`);
};
