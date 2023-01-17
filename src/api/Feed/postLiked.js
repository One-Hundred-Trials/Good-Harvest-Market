import { axiosPrivate } from '../api';

const postLiked = async (postId) => {
  const res = await axiosPrivate.post(`/post/${postId}/heart`);
  return res.data;
};

export default postLiked;
