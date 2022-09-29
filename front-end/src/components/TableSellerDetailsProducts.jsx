import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import TheadDetailsProductsCheckout from './TheadDetailsProductsCheckout';

function TableSellerDetailsProducts({ sale }) {
  const [orders, setOrders] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  function calcTotalValue() {
    if (orders.length > 0) {
      const SALE = orders[0];
      let total = 0;
      SALE.Products.forEach((product) => {
        total += Number(product.SalesProduct.quantity) * Number(product.price);
      });
      setTotalPrice(total);
    }
  }

  useEffect(() => {
    setOrders(sale);
    calcTotalValue();
  }, [sale]);

  return (
    <>
      <table className="w-full shadow-xl">
        <TheadDetailsProductsCheckout />
        <tbody className="bg-gray-50 border-b-2 border-gray-200">
          {
            orders.length > 0 && orders[0].Products.map((p, index) => (
              <tr key={ index }>
                <td
                  className="p-3 text-sm text-gray-700 hover:bg-blue-400"
                  data-testid={ `customer_checkout__element
                  -order-table-item-number-${index}` }
                >
                  {p.id}
                </td>
                <td
                  className="p-3 text-sm text-gray-700 text-center hover:bg-blue-400"
                  data-testid={ `customer_checkout__element-order-table-name-${index}` }
                >
                  {p.name}
                </td>
                <td
                  className="p-3 text-sm text-gray-700 text-center hover:bg-blue-400"
                  data-testid={
                    `customer_checkout__element-order-table-quantity-${index}`
                  }
                >
                  {p.SalesProduct.quantity}
                </td>
                <td
                  className="p-3 text-sm text-gray-700 text-center hover:bg-blue-400"
                  data-testid={ `customer_checkout__
                  element-order-table-unit-price-${index}` }
                >
                  {`R$ ${Number(p.price).toFixed(2).replace('.', ',')}`}
                </td>
                <td
                  className="p-3 text-sm text-gray-700 text-center hover:bg-blue-400"
                  data-testid={ `customer_checkout__element-
                  order-table-sub-total-${index}` }
                >
                  {
                    `R$ ${
                      (
                        Number(p.price) * Number(p.SalesProduct.quantity)
                      ).toFixed(2).replace('.', ',')
                    }`
                  }
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <section className="m-2">
        <p
          className={ `h-16 w-16 border border-red-500
    font-semibold rounded-md ml-4 px-4 py-2 outline-none w-40 h-12 text-red-600
    hover:text-white hover:bg-red-600` }
          data-testid="seller_order_details__element-order-total-price"
        >
          {`Total: R$ ${(
            totalPrice
          )
            .toFixed(2)
            .replace('.', ',')}`}
        </p>
      </section>
    </>

  );
}

TableSellerDetailsProducts.propTypes = {
  sale: propTypes.instanceOf(Array).isRequired,
};

export default TableSellerDetailsProducts;
