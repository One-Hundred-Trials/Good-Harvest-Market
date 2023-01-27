import { axiosPrivate } from '../api';

const getPost = async (id) => {
  try {
    const res = await axiosPrivate.get(`/post/${id}`);
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

export default getPost;
