import { axiosPrivate } from 'api/api';

const getFollowingsList = async (account) => {
  try {
    const res = await axiosPrivate.get(
      `/profile/${account}/following?limit=1000`
    );
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

export default getFollowingsList;
