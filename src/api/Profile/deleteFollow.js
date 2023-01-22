import { axiosPrivate } from '../api';

const deleteFollow = async (accountName) => {
  const response = await axiosPrivate.delete(
    `/profile/${accountName}/unfollow`
  );

  return response.data;
};
export default deleteFollow;
