import axios from 'axios';

async function updateStatus(newStatus, saleId) {
  const url = `http://localhost:3001/sales/${saleId}`;
  const body = {
    status: newStatus,
  };

  const response = await axios.put(url, body).catch((error) => error.response);
  return response;
}

export default updateStatus;
