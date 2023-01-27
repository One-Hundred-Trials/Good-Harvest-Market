import { axiosPrivate } from '../api';

const updateMyProfile = async (formData) => {
  try {
    const response = await axiosPrivate.put('/user', formData);
    console.log(response);
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

export default updateMyProfile;
