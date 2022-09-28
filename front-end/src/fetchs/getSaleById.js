import axios from 'axios';

const getSaleById = async (id) => {
  const URL = `http://localhost:3001/sales/${id}`;
  const { data } = await axios.get(URL);

  return data;
};

export default getSaleById;
