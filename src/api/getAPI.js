import { baseUrl, axiosPrivate } from './api';

const getAPI = async (url) => {
  const response = await axiosPrivate.get(baseUrl + url);
  return response.data;
};

export default getAPI;
