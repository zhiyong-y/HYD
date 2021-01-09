import http from "@/utils";

export const getUserList = () => {
  return http.get(`/user/getUserList`);
};
