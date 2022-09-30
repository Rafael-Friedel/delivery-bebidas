import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderClient from '../components/HeaderClient';
import getOrdersById from '../fetchs/getOrdersById';
import { getUser } from '../services/localStorage';

function MyOrders() {
  const [myOrders, setMyOrders] = useState([]);
  const user = getUser();
  const navigate = useNavigate();

  const getOrders = async (id) => {
    const orders = await getOrdersById(id);
    setMyOrders(orders);
  };

  useEffect(() => {
    getOrders(user.id);
  }, [user.id]);

  const redirect = (id) => {
    console.log(id);
    navigate(`/customer/orders/${id}`);
  };

  const testId = 'customer_orders__element-';
  return (
    <main className="bg-blue-50 w-full">
      <HeaderClient />
      <section className="flex bg-blue-50 p-6 flex-wrap mx-28">
        {myOrders.map((o) => (
          <button
            key={ o.id }
            className="flex m-6 rounded-lg"
            onClick={ () => redirect(o.id) }
            type="button"
          >
            <section className="flex bg-white  shadow-md w-full items-center">
              <p
                data-testid={ `${testId}order-id-${o.id}` }
                className="text-center px-2 w-32 bg-teal-200 py-7"
              >
                {`Pedido ${o.id}`}
              </p>
              <p
                data-testid={ `${testId}delivery-status-${o.id}` }
                className="text-center px-2 text-white bg-red-400 py-7 w-32"
              >
                {o.status}
              </p>
            </section>
            <section className="bg-teal-50 shadow-md w-full">
              <p
                data-testid={ `${testId}order-date-${o.id}` }
                className="text-center px-2 m-2  mb-6"
              >
                {o.saleDate}
              </p>
              <p
                data-testid={ `${testId}card-price-${o.id}` }
                className="text-center px-2  bg-blue-300"
              >
                {`R$ ${o.totalPrice.replace('.', ',')}`}
              </p>
            </section>
          </button>
        ))}
      </section>
    </main>
  );
}

export default MyOrders;
