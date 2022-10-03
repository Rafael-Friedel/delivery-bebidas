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

  const redirect = (id) => {
    navigate(`/customer/orders/${id}`);
  };

  function toggleColorStatus(statusName) {
    const status = {
      Pendente: 'bg-yellow-500',
      Preparando: 'bg-green-500',
      Entregue: 'bg-cyan-400',
      'Em Trânsito': 'bg-purple-400',
    };
    return status[statusName];
  }

  useEffect(() => {
    getOrders(user.id);
  }, [user.id]);

  const testId = 'customer_orders__element-';
  const classStyle = 'flex flex-col p-2 justify-center text-center text-lg h-full w-1/4';
  return (
    <main className="bg-blue-50 w-full">
      <HeaderClient />
      <section className="flex justify-center bg-blue-50 p-6 flex-wrap mx-28">
        {myOrders.map((o) => (
          <button
            key={ o.id }
            className="flex m-6 rounded-lg border-2 w-96 h-32"
            onClick={ () => redirect(o.id) }
            type="button"
          >
            <section
              className={ classStyle }
            >
              <p>
                Pedido:
              </p>
              <p
                data-testid={ `${testId}order-id-${o.id}` }
              >
                {o.id}
              </p>
            </section>
            <section className="flex-col p-3 w-3/4 h-full w-3/4 bg-slate-300">
              <div className="flex h-full">
                <div
                  className={
                    `flex flex-col justify-center w-3/4 p-2 rounded-md ${
                      toggleColorStatus(o.status)}`
                  }
                >
                  <p
                    data-testid={ `${testId}delivery-status-${o.id}` }
                  >
                    {o.status}
                  </p>
                </div>
                <div className="flex flex-col justify-between p-2">
                  <p
                    data-testid={ `${testId}order-date-${o.id}` }
                    className="border-2 p-1 rounded-md bg-slate-200"
                  >
                    {o.saleDate}
                  </p>
                  <p
                    data-testid={ `${testId}card-price-${o.id}` }
                    className="border-2 p-1 rounded-md bg-slate-200"
                  >
                    {`R$ ${o.totalPrice.replace('.', ',')}`}
                  </p>
                </div>
              </div>
            </section>
          </button>
        ))}
      </section>
    </main>
  );
}

export default MyOrders;
