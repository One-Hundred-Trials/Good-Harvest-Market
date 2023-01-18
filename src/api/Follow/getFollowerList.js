import { axiosPrivate } from '../api';

const getFollowersList = async (accountName) => {
  const response = await axiosPrivate.get(
    `/profile/${accountName}/follower?limit=1000`
  );

  return response.data;
};
export default getFollowersList;
