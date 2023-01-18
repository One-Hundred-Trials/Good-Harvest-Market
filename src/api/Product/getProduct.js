import { axiosPrivate } from '../api';

const uploadProduct = async (id, Image, ItemName, Price, Link, ImageSrc) => {
  try {
    const res = await axiosPrivate.get(`/product/detail/${id}`);
    console.log(res);
    console.log(res.data);
    const productData = res.data.product;
    Image(productData.itemImage);
    ItemName(productData.itemName);
    Price(new Intl.NumberFormat().format(productData.price));
    Link(productData.link);
    ImageSrc(productData.itemImage);
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
