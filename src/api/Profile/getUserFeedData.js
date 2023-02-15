import { axiosPrivate } from '../api';

const getUserFeedData = async (id, pageNumber) => {
  try {
    const response = await axiosPrivate.get(
      `/post/${id}/userpost?limit=${pageNumber}`
    );
    return response.data;
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

export default getUserFeedData;
