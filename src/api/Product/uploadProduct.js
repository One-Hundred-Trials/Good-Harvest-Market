import { axiosPrivate } from '../api';

const uploadProduct = async (product) => {
  try {
    const res = await axiosPrivate.post('/product', JSON.stringify(product));
    console.log(res);
    console.log(res.data);
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

export default uploadProduct;
