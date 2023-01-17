import { axiosPrivate } from '../api';

const getMyProfile = async () => {
  const response = await axiosPrivate.get('/user/myinfo');

  return response.data;
};

export default getMyProfile;
