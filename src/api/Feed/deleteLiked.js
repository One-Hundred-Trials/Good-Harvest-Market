import { axiosPrivate } from '../api';

const deleteLiked = async (postId) => {
  try {
    const res = await axiosPrivate.delete(`/post/${postId}/unheart`);
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

export default deleteLiked;
