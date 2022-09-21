import axios from 'axios';

const createUser = async (body) => {
  const url = 'http://localhost:3001/register';
  const response = await axios(url, body);
  return response.data;
};

export default createUser;
