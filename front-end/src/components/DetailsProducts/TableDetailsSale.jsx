import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import updateStatus from '../../fetchs/updateSaleStatus';

function TableDetailsSale({ sale }) {
  const [colorStatus, setColorStatus] = useState('');

  const testId = 'customer_order_details__element-order-details-label-';

  function updateSaleStatus(status) {
    updateStatus(status, sale.id);
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
    <table className="w-full rounded-md">
      <thead className="bg-slate-300 border-b-2 border-gray-200">
        <tr>
          <th
            className="p-2 text-md font-semibold tracking-wide text-center"
            data-testid="customer_order_details__element-order-details-label-order-id"
          >
            {`Pedido ${sale.id}`}
          </th>
          <th
            className="p-2 text-md font-semibold tracking-wide text-center"
            data-testid="customer_order_details__element-order-details-label-seller-name"
          >
            {`Vendedor:  ${sale.seller.name}`}
          </th>
          <th
            className="p-2 text-md font-semibold tracking-wide text-center"
            data-testid="customer_order_details__element-order-details-label-order-date"
          >
            {`Data: ${sale.saleDate}`}
          </th>
          <th
            className={ `p-2 text-md font-semibold tracking-wide
            text-center ${colorStatus}` }
            data-testid={ `${testId}delivery-status${sale.id}` }
          >
            {sale.status}
          </th>
          <th className="p-2 text-md font-semibold tracking-wide text-end">
            <button
              type="button"
              className={ `bg-teal-500 hover:bg-teal-600 outline-none py-2 
        px-4 ml-4 text-white font-semibold rounded-md` }
              data-testid="customer_order_details__button-delivery-check"
              disabled={ sale.status !== 'Em Trânsito' }
              onClick={ () => updateSaleStatus('Entregue') }
            >
              Marcar como entregue
            </button>
          </th>
        </tr>
      </thead>
    </table>
  );
}

TableDetailsSale.propTypes = {
  sale: PropTypes.shape({
    id: PropTypes.number.isRequired,
    sellerId: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    saleDate: PropTypes.string.isRequired,
    seller: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  }),
};

TableDetailsSale.defaultProps = {
  sale: PropTypes.shape({
    id: 0,
    sellerId: 0,
    status: 'PENDENTE',
    saleDate: new Date(),
    seller: PropTypes.shape({
      name: 'Vendedor',
    }),
  }),
};
export default TableDetailsSale;
