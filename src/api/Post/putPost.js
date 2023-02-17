import { axiosPrivate } from 'api/api';

const putPost = async (id, postData) => {
  try {
    const res = await axiosPrivate.put(`/post/${id}`, JSON.stringify(postData));
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

export default putPost;
