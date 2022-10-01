import axios from 'axios';

const deleteUser = async (id) => {
  const URL = `http://localhost:3001/users/delete/${id}`;
  const { data } = await axios.delete(URL);

  return data;
};

export default deleteUser;
