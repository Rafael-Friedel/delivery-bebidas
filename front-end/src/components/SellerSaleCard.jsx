import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

function SellerSaleCard({ sale }) {
  return (
    <section style={ { margin: '20px 10px' } }>
      <Link to={ `/seller/orders/${sale.id}` }>
        <div>
          <span>
            Pedido:
          </span>
          <span data-testid={ `seller_orders__element-order-id-${sale.id}` }>
            { sale.id }
          </span>
        </div>
        <div>
          <p data-testid={ `seller_orders__element-delivery-status-${sale.id}` }>
            { sale.status }
          </p>
        </div>
        <div>
          <p data-testid={ `seller_orders__element-order-date-${sale.id}` }>
            { sale.saleDate }
          </p>
        </div>
        <div>
          <p data-testid={ `seller_orders__element-card-price-${sale.id}` }>
            { sale.totalPrice }
          </p>
        </div>
        <div>
          <p data-testid={ `seller_orders__element-card-address-${sale.id}` }>
            { `${sale.deliveryAddress}, ${sale.deliveryNumber}` }
          </p>
        </div>
      </Link>
    </section>
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
