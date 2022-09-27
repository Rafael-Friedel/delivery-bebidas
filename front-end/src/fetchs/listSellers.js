import axios from 'axios';

const sellersList = async () => {
  const URL = 'http://localhost:3001/users/sellers';
  const { data } = await axios.get(URL);

  return data;
};

export default sellersList;
