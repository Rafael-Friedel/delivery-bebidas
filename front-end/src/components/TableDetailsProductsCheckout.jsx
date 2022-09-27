import React, { useEffect } from 'react';
import {
  readProducts,
  removeProducts as removeProductsLocalStorage,
  saveProducts,
} from '../services/localStorageCartProducts';

import TheadDetailsProductsCheckout from './TheadDetailsProductsCheckout';

function TableDetailsProductsCheckout() {
  const myProducts = readProducts().map((p) => {
    p.subTotal = (p.price * p.qtde).toFixed(2);
    return p;
  });

  console.log(myProducts);

  useEffect(() => {
    saveProducts([
      { id: 1, name: 'Skol Beats', qtde: 2, price: 2.5 },
      { id: 2, name: 'Budweiser', qtde: 1, price: 3.5 },
      { id: 3, name: 'Patagonia', qtde: 10, price: 8.5 },
    ]);
  }, []);

  const removeProducts = (product) => {
    removeProductsLocalStorage(product);
  };

  return (
    <table className="w-full shadow-xl">
      <TheadDetailsProductsCheckout />
      <tbody className="bg-gray-50 border-b-2 border-gray-200">
        {myProducts.map((p, index) => {
          p.subTotal = (p.price * p.qtde).toFixed(2).replace('.', ',');
          return (
            <tr key={ index }>
              <td
                className="p-3 text-sm text-gray-700 text-center hover:bg-blue-400"
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
                data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
              >
                {p.qtde}
              </td>
              <td
                className="p-3 text-sm text-gray-700 text-center hover:bg-blue-400"
                data-testid={ `customer_checkout__
                element-order-table-unit-price-${index}` }
              >
                {`R$ ${p.price.toFixed(2).replace('.', ',')}`}
              </td>
              <td
                className="p-3 text-sm text-gray-700 text-center hover:bg-blue-400"
                data-testid={ `customer_checkout__element-
                order-table-sub-total-${index}` }
              >
                {`R$${p.subTotal}`}
              </td>
              <td
                className={ `p-3 text-sm text-gray-700 text-center 
                hover:bg-red-600 hover:text-white` }
              >
                <button
                  type="button"
                  data-testid={ `customer_checkout__element-order-table-remove-${index}` }
                  onClick={ () => removeProducts(p) }
                >
                  Remover
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>

      {!myProducts && (
        <section className="m-2">
          <p
            className={ `h-16 w-16 border border-red-500 
    font-semibold rounded-md ml-4 px-4 py-2 outline-none w-40 h-12 text-red-600 
    hover:text-white hover:bg-red-600` }
            data-testid="customer_checkout__element-order-total-price"
          >
            {`Total: R$ ${myProducts
              .reduce(
                (acc, curr) => +acc.subTotal.replace(',', '.')
                  + +curr.subTotal.replace(',', '.'),
              )
              .toFixed(2)
              .replace('.', ',')}`}
          </p>
        </section>
      )}
    </table>
  );
}

export default TableDetailsProductsCheckout;
