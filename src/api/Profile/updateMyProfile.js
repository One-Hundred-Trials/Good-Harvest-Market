import { axiosPrivate } from '../api';

const updateMyProfile = async (formData) => {
  const response = await axiosPrivate.put('/user', formData);
  console.log(response);
  return response.data;
};

export default updateMyProfile;
