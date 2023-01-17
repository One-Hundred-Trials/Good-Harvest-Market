import { axiosPrivate } from '../api';

const createPost = async (formData) => {
  const response = await axiosPrivate.post('/post', formData);

  return response.data;
};

export default createPost;
