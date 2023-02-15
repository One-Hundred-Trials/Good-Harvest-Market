import { axiosPrivate } from '../api';

const addFollow = async (id) => {
  try {
    const response = await axiosPrivate.post(`/profile/${id}/follow`);
    return response.data;
  } catch (err) {
    console.error(err);
  }
  return null;
};
export default addFollow;
