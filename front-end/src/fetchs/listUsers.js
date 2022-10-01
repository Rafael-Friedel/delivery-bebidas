import axios from 'axios';

const usersList = async () => {
  const URL = 'http://localhost:3001/users';
  const { data } = await axios.get(URL);

  return data;
};

export default usersList;
