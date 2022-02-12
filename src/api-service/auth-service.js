import apiConfig from "../api-config";

const axios = require("axios");

const BASE_DOMAIN = "https://asddd.free.beeceptor.com";

export async function login(payload) {
  try {
    const response = await axios.post(
      `${BASE_DOMAIN}${apiConfig.auth.login}`,
      payload
    );
    console.log(response);
    return Promise.resolve(response);
  } catch (error) {
    // console.log(err);
    if (error.response.status === 403) {
        // TODO implement auto logout functionality
    }
    return Promise.reject(error.response.data);
  }
}
