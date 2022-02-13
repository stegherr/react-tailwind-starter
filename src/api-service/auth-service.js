import apiConfig from "../api-config";
import { useDispatch } from "react-redux";
import { uiActions } from "../store/ui-slice";
const axios = require("axios");

const BASE_DOMAIN = "https://asdda.free.beeceptor.com";
export async function login(payload) {
  try {
    const response = await axios.post(
      `${BASE_DOMAIN}${apiConfig.auth.login}`,
      payload
    );
    console.log(response);
    return Promise.resolve(response.data);
  } catch (error) {
    // console.log(err);
    error.response.data.status = error.response.status;
    throw (
      error.response.data || {
        status: 400,
        message: "Something went wrong please try again.",
      }
    );
    // return Promise.reject(error.response.data);
  }
}
