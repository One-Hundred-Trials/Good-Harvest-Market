import { axiosPrivate } from '../api';

const postComment = async (postId, comment, commentReport) => {
  const response = await axiosPrivate.post(
    `/post/${postId}/comments/${comment.id}/report`,
    JSON.stringify(commentReport)
  );
  return response.data;
};

export default postComment;
