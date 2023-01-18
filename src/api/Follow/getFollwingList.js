import { axiosPrivate } from '../api';

const getFollowingsList = async (accountName) => {
  const response = await axiosPrivate.get(
    `/profile/${accountName}/following?limit=1000`
  );

  return response.data;
};

export default getFollowingsList;
