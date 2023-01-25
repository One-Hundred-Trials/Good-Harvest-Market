import { axiosPrivate } from '../api';

const getMyProfile = async () => {
  try {
    const response = await axiosPrivate.get('/user/myinfo');

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

export default getMyProfile;
