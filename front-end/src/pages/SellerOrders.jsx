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
    <main className="bg-blue-50 w-full">
      <HeaderSeller />
      <section className="flex bg-blue-50 p-6 flex-wrap mx-28 justify-center">
        {
          orders.length > 0 && (
            orders.map((sale) => <SellerSaleCard key={ sale.id } sale={ sale } />)
          )
        }
      </section>
    </main>
  );
}
