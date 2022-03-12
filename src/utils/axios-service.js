import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://asdd1.free.beeceptor.com",
});

axiosClient.interceptors.request.use((request) => {
  let loggedInUser = localStorage.getItem("loggedInUser") || null;
  if (loggedInUser) {
    loggedInUser = JSON.parse(loggedInUser);
    request.headers.common.Authorization = `Bearer ${loggedInUser.accessToken}`;
  }
  return request;
});

export default axiosClient;
