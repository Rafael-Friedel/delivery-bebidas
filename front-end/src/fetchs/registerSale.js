import axios from 'axios';

const registerSales = async (body, token) => {
  const url = 'http://localhost:3001/sales';
  const { data } = await axios
    .post(url, body, {
      headers: {
        Authorization: token,
      },
    })
    .catch((error) => error.response);
  return data;
};

export default registerSales;
