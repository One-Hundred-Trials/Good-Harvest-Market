import { axiosPrivate } from 'api/api';

const getFollowFeed = async (pageNumber) => {
  try {
    const res = await axiosPrivate.get(`/post/feed?limit=${pageNumber}`);
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

export default getFollowFeed;
