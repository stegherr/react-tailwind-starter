import axiosClient from "../../utils/axios-service";
export const getUsers = async (search) => {
    console.log('coming')
  try {
    const {data} = await axiosClient.get(`/users`, { params: search });
    return data;
  } catch (e) {
    console.error(e);
    return Promise.reject(e);
  }
};
