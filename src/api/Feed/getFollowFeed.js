import { axiosPrivate } from '../api';

const getFollowFeed = async (pageNumber) => {
  const response = await axiosPrivate.get(`/post/feed?limit=${pageNumber}`);

  return response.data;
};

export default getFollowFeed;
