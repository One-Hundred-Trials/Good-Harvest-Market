import putAPI from '../putAPI';

const editProduct = async (id, product) => {
  try {
    const res = await putAPI(`/product/${id}`, product);
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
