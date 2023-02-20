import { axiosPrivate } from 'api/api';

const postLiked = async (postId) => {
  try {
    const res = await axiosPrivate.post(`/post/${postId}/heart`);
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

export default postLiked;
