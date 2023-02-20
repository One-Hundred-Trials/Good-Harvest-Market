import { axiosPrivate } from 'api/api';

const deleteFollow = async (id) => {
  try {
    const response = await axiosPrivate.delete(`/profile/${id}/unfollow`);
    return response.data;
  } catch (err) {
    console.error(err);
  }
  return null;
};
export default deleteFollow;
