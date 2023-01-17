import { baseUrl, axiosPrivate } from './api';

const putAPI = async (url, reqData) => {
  const response = await axiosPrivate.put(
    baseUrl + url,
    JSON.stringify(reqData)
  );
  return response.data;
};

export default putAPI;
