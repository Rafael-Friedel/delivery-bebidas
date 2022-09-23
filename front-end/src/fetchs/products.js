import axios from 'axios';

const productsList = async () => {
  const URL = 'http://localhost:3001/products';
  const { data } = await axios.get(URL);

  return data;
};

export default productsList;
