import { instance } from '../api';

const postUserSignUp = async (formData) => {
  const response = await instance.post('/user/emailvalid', formData);
  return response.data;
};
export default postUserSignUp;
