import axios from 'axios';

const getOrdersById = async (id) => {
  const url = `http://localhost:3001/users/customer/orders/${id}`;
  const response = await axios.get(url).catch((error) => error.response);
  return response.data;
};

export default getOrdersById;
