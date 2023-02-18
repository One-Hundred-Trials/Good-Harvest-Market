import { axiosPrivate } from 'api/api';

const createPost = async (formData) => {
  try {
    const res = await axiosPrivate.post('/post', JSON.stringify(formData));
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

export default createPost;
