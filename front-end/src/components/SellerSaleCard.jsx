import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function SellerSaleCard({ sale }) {
  const navigate = useNavigate();
  const [colorStatus, setColorStatus] = useState('');

  function redirect(id) {
    navigate(`/seller/orders/${id}`);
  }

  function toggleColorStatus() {
    const status = {
      Pendente: 'bg-yellow-500',
      Preparando: 'bg-green-500',
      Entregue: 'bg-cyan-400',
      'Em Trânsito': 'bg-purple-400',
    };
    setColorStatus(status[sale.status]);
  }

  useEffect(() => {
    toggleColorStatus();
  }, [sale]);

  return (
    <button
      type="button"
      className="flex m-6 rounded-lg border-2 w-96 h-36"
      onClick={ () => redirect(sale.id) }
    >
      <div
        className="flex flex-col p-2 justify-center text-center text-lg h-full w-1/4"
      >
        <p>
          Pedido:
          {' '}
        </p>
        <p data-testid={ `seller_orders__element-order-id-${sale.id}` }>
          { sale.id }
        </p>
      </div>
      <div className="flex-col p-1 w-3/4 h-full w-3/4 bg-slate-300">
        <div className="flex h-3/4">
          <div
            className={
              `flex flex-col justify-center w-3/4 p-2 rounded-md ${colorStatus}`
            }
          >
            <p
              data-testid={ `seller_orders__element-delivery-status-${sale.id}` }
            >
              { sale.status }
            </p>
          </div>
          <div
            className="flex flex-col justify-between p-2"
          >
            <p
              className="border-2 p-1 rounded-md bg-slate-200"
              data-testid={ `seller_orders__element-order-date-${sale.id}` }
            >
              { sale.saleDate }
            </p>
            <p
              className="border-2 p-1 rounded-md bg-slate-200"
              data-testid={ `seller_orders__element-card-price-${sale.id}` }
            >
              { `R$ ${sale.totalPrice}` }
            </p>
          </div>
        </div>
        <div>
          <p
            className="p-2 text-end"
            data-testid={ `seller_orders__element-card-address-${sale.id}` }
          >
            { `${sale.deliveryAddress}, ${sale.deliveryNumber}` }
          </p>
        </div>
      </div>
    </button>
  );
}

SellerSaleCard.propTypes = {
  sale: PropTypes.shape({
    id: PropTypes.number.isRequired,
    userId: PropTypes.number.isRequired,
    sellerId: PropTypes.number.isRequired,
    totalPrice: PropTypes.string.isRequired,
    deliveryAddress: PropTypes.string.isRequired,
    deliveryNumber: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    saleDate: PropTypes.string.isRequired,
  }).isRequired,
};

export default SellerSaleCard;
