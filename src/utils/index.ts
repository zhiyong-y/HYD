/**
 * 1. 设置axios相关参数
 * 2. 设置请求拦截以及响应
 * 3. 封装get/post方法
 */
import Qs from "qs";
import axios from "axios";
import store from "@/store/index";
axios.defaults.timeout = 10000;
axios.defaults.withCredentials = true;

// 请求拦截
axios.interceptors.request.use(
  config => {
    // 获取到请求参数
    console.log(config);
    // 设置loading
    store.commit("loading");
    console.log(store);
    return config;
  },
  error => {
    // 失败后取消loading
    store.commit("loading");
    return Promise.reject(error);
  }
);
// 请求响应
axios.interceptors.response.use(
  response => {
    store.commit("loading");
    return response;
  },
  error => {
    store.commit("loading");
    return error;
  }
);
export default {
  get(url: string, params = {}) {
    return new Promise((resolve, reject) => {
      axios
        .get(url, params)
        .then(res => {
          resolve(res.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  post(url: string, params = {}) {
    console.log();
    return new Promise((resolve, reject) => {
      axios
        .post(url, Qs.stringify(params))
        .then(res => {
          resolve(res.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
};
