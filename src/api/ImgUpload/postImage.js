import { imgInstance } from '../api';

const postImage = async (imgData) => {
  const response = await imgInstance.post('/image/uploadfiles', imgData);

  return response.data;
};
export default postImage;
