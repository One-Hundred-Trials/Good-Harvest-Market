import { axiosPrivate } from 'api/api';

const postComment = async (id, commentData) => {
  try {
    const res = await axiosPrivate.post(
      `/post/${id}/comments`,
      JSON.stringify(commentData)
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

export default postComment;
