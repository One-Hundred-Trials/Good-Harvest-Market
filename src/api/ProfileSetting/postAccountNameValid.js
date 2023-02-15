import { instance } from '../api';

const postAccountNameValid = async (formData) => {
  try {
    const response = await instance.post('/user/accountnamevalid', formData);
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

export default postAccountNameValid;
