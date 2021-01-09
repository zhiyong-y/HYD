import Mock from "mockjs";
import user from "./user/index";

// arg1: 路径；arg2: 请求方法；arg3: 方法名
Mock.mock(/\/user\/getUserList/, "get", user.getUserList);
