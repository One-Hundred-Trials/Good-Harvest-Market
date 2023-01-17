import { axiosPrivate } from '../api';

const getSearchUser = async (keyword) => {
  const response = await axiosPrivate.get(
    `/user/searchuser/?keyword=${keyword}`
  );
  return response.data;
};

export default getSearchUser;
