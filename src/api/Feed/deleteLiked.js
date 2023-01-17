import { axiosPrivate } from '../api';

const deleteLiked = async (postId) => {
  const res = await axiosPrivate.delete(`/post/${postId}/unheart`);
  return res.data;
};

export default deleteLiked;
