import { axiosPrivate } from 'api/api';

const reportComment = async (postId, comment, commentReport) => {
  try {
    const res = await axiosPrivate.post(
      `/post/${postId}/comments/${comment.id}/report`,
      JSON.stringify(commentReport)
    );
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

export default reportComment;
