import axios from 'axios';

const getSalesBySeller = async (sellerId) => {
  const URL = `http://localhost:3001/sales/orders/${sellerId}`;
  const { data } = await axios.get(URL);

  return data;
};

export default getSalesBySeller;
