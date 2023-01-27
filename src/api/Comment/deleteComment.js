import { axiosPrivate } from '../api';

const deleteComment = async (postId, comment) => {
  try {
    const res = await axiosPrivate.delete(
      `/post/${postId}/comments/${comment.id}`
    );
    console.log(res);
  } catch (err) {
    if (err.response) {
      console.log(err.response.data);
      console.log(err.response.status);
      console.log(err.response.headers);
    } else {
      console.log(`Error: ${err.message}`);
    }
  }
};

export default deleteComment;
