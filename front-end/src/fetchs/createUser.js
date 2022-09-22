import axios from 'axios';

const createUser = async (body) => {
  const url = 'http://localhost:3001/register';
  const response = await axios.post(url, body).catch((error) => error.response);
  return response;
};

export default createUser;
