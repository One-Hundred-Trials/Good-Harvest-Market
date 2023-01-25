import { axiosPrivate } from '../api';

const getProduct = async (id) => {
  try {
    const res = await axiosPrivate.get(`/product/detail/${id}`);
    console.log(res);
    return res.data;
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

export default getProduct;
