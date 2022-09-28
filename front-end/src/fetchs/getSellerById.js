import axios from 'axios';

const getSellerById = async (id) => {
  const URL = `http://localhost:3001/seller/${id}`;
  const { data } = await axios.get(URL);

  return data;
};

export default getSellerById;
