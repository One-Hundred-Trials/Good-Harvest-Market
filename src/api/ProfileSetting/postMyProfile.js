import { instance } from '../api';

const postMyProfile = async (formData) => {
  console.log(formData);
  const response = await instance.post('/user', formData);
  return response.data;
};

export default postMyProfile;
