import axios from 'axios';

const registerSales = async (body) => {
  const url = 'http://localhost:3001/sales';
  const { data } = await axios.post(url, body).catch((error) => error.response);
  return data;
};

export default registerSales;
