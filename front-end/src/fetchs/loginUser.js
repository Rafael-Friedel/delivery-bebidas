import axios from 'axios';

const loginUser = async (body) => {
  const url = 'http://localhost:3001/login';
  const response = await axios(url, body);
  return response.data;
};

export default loginUser;
