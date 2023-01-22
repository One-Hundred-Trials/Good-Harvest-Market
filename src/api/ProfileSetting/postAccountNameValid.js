import { instance } from '../api';

const postAccountNameValid = async (formData) => {
  const response = await instance.post('/user/accountnamevalid', formData);
  return response.data;
};

export default postAccountNameValid;
