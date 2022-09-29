import { useEffect, useState } from 'react';
import getSalesBySeller from '../fetchs/getSalesBySeller';
import SellerSaleCard from '../components/SellerSaleCard';
import { getUser } from '../services/localStorage';
import HeaderSeller from '../components/HeaderSeller';

export default function SellerOrders() {
  const [orders, setOrders] = useState([]);

  async function getSales() {
    const user = getUser();
    const response = await getSalesBySeller(user.id);
    setOrders(response);
  }

  useEffect(() => {
    getSales();
  }, []);

  return (
    <>
      <HeaderSeller />
      <main>
        {
          orders.length > 0 && (
            orders.map((sale) => <SellerSaleCard key={ sale.id } sale={ sale } />)
          )
        }
      </main>
    </>
  );
}
