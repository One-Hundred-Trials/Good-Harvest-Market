import { baseUrl, axiosPrivate } from './api';

const getAPI = async (url) => {
  const response = await axiosPrivate.get(baseUrl + url);
  console.log(response);
  return response.data;
};

export default getAPI;
