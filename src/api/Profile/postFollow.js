import { axiosPrivate } from '../api';

const postFollow = async (accountName) => {
  const response = await axiosPrivate.post(`/profile/${accountName}/follow`);

  return response.data;
};
export default postFollow;
