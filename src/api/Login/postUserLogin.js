import { instance } from '../api';

const postUserLogin = async (formData) => {
  const response = await instance.post('user/login', formData);
  return response.data;
};

export default postUserLogin;
