/**
 * 1. 设置axios相关参数
 * 2. 设置请求拦截以及响应
 * 3. 封装get/post方法
 */
import Qs from "qs";
import axios from "axios";
import store from "@/store/index";

const requestTime = 10; //请求响应时间，默认为10s
Object.assign(axios.defaults, {
  timeout: 1000 * requestTime,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json"
  }
});

// 请求拦截
axios.interceptors.request.use(
  config => {
    // 获取到请求参数，按需设置
    // const token = sessionStorage.getItem("token");
    // if (token) {
    //   Object.assign(config.headers, {
    //     Token: token
    //   });
    // } else {
    //   sessionStorage.removeItem("token");
    //   window.location.href = "/login";
    // }
    // 设置loading
    store.commit("loading");
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
    // if (response.data.code === 502) {
    //   //登录失效
    //   sessionStorage.removeItem("token");
    //   window.location.href = "/login";
    //   return;
    // }
    return response;
  },
  error => {
    store.commit("loading");
    return Promise.reject(error);
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
