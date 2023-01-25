import { instance } from '../api';

const postMyProfile = async (formData) => {
  try {
    console.log(formData);
    const response = await instance.post('/user', formData);
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

export default postMyProfile;
