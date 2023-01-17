import { baseUrl, axiosPrivate } from './api';

const deleteAPI = async (url) => {
  const response = await axiosPrivate.delete(baseUrl + url);
  return response.data;
};
export default deleteAPI;
