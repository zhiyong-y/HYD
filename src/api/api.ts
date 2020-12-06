import axios from "axios";

const base = "/api";

export const getMenu = () => {
  return axios.get(`${base}/aa`);
};
