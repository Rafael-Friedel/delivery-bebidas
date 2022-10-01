import axios from 'axios';

const createUser = async (body, token) => {
  const url = 'http://localhost:3001/register/admin';
  const response = await axios.post(url, body, {
    headers: {
      Authorization: token,
    },
  }).catch((error) => error.response);
  return response;
};

export default createUser;
