import { axiosPrivate } from '../api';

const getSearchUser = async (keyword) => {
  try {
    const response = await axiosPrivate.get(
      `/user/searchuser/?keyword=${keyword}`
    );
    return response.data;
  } catch (err) {
    if (err.response) {
      console.log(err.response.data);
      console.log(err.response.status);
      console.log(err.response.headers);
    } else {
      console.log(`Error: ${err.message}`);
    }
  }
  return null;
};

export default getSearchUser;
