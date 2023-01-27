import { axiosPrivate } from '../api';

const deleteProduct = async (productId) => {
  try {
    const res = await axiosPrivate.delete(`/product/${productId}`);
    console.log(res);
  } catch (err) {
    if (err.response) {
      console.log(err.response.data);
      console.log(err.response.status);
      console.log(err.response.headers);
    } else {
      console.log(`Error: ${err.message}`);
    }
  }
};

export default deleteProduct;
