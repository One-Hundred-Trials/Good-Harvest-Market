import { instance } from 'api/api';

const postMyProfile = async (formData) => {
  try {
    const res = await instance.post('/user', formData);
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

export default postMyProfile;
