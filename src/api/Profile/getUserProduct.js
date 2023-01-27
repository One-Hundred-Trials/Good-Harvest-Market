import { axiosPrivate } from '../api';

const getUserProduct = async (accountName) => {
  try {
    const response = await axiosPrivate.get(`/product/${accountName}`);
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

export default getUserProduct;
