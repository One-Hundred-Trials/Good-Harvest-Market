import { axiosPrivate } from '../api';

const editProduct = async (id, product) => {
  try {
    const res = await axiosPrivate.put(
      `/product/${id}`,
      JSON.stringify(product)
    );
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

export default editProduct;
