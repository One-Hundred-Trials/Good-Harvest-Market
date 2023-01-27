import { imgInstance } from '../api';

const postImage = async (imgData) => {
  try {
    const response = await imgInstance.post('/image/uploadfiles', imgData);

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
export default postImage;
