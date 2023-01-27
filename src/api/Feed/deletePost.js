import { axiosPrivate } from './api';

const deletePost = async (postId) => {
  try {
    const res = await axiosPrivate.delete(`/post/${postId}`);
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

export default deletePost;
