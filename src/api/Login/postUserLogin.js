import { instance } from '../api';

const postUserLogin = async (formData) => {
  try {
    const response = await instance.post('user/login', formData);
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export default postUserLogin;
