import React, { useContext } from 'react';
import myContext from '../context/myContext';
import {
  readProducts,
  removeProducts,
} from '../services/localStorageCartProducts';
import TheadDetailsProductsCheckout from './TheadDetailsProductsCheckout';

function TableDetailsProductsCheckout() {
  const { cart, setCart } = useContext(myContext);

  const rmvProducts = (product) => {
    setCart(cart.filter((p) => p !== product));
    removeProducts(product);
  };

  const testId = 'customer_checkout__element-order-table';

  const myProducts = readProducts();
  return (
    <table className="w-full shadow-xl">
      <TheadDetailsProductsCheckout />
      <tbody className="bg-gray-50 border-b-2 border-gray-200">
        {myProducts.map((p, index) => (
          <tr key={ index }>
            <td
              className="p-3 text-sm text-gray-700 hover:bg-blue-400"
              data-testid={ `${testId}-item-number-${p.id}` }
            >
              {p.id}
            </td>
            <td
              className="p-3 text-sm text-gray-700 text-center hover:bg-blue-400"
              data-testid={ `${testId}-name-${p.id}` }
            >
              {p.name}
            </td>
            <td
              className="p-3 text-sm text-gray-700 text-center hover:bg-blue-400"
              data-testid={ `${testId}-quantity-${p.id}` }
            >
              {p.quantity}
            </td>
            <td
              className="p-3 text-sm text-gray-700 text-center hover:bg-blue-400"
              data-testid={ `${testId}-unit-price-${p.id}` }
            >
              {`R$ ${Number(p.price).toFixed(2).replace('.', ',')}`}
            </td>
            <td
              className="p-3 text-sm text-gray-700 text-center hover:bg-blue-400"
              data-testid={ `${testId}-sub-total-${p.id}` }
            >
              {`R$ ${Number(p.total).toFixed(2).replace('.', ',')}`}
            </td>
            <td
              className={ `p-3 text-sm text-gray-700 text-center 
                hover:bg-red-600 hover:text-white` }
            >
              <button
                type="button"
                data-testid={ `${testId}-remove-${p.id}` }
                onClick={ () => rmvProducts(p) }
              >
                Remover
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <section className="m-2">
        <p
          className={ `h-16 w-16 border border-red-500 
    font-semibold rounded-md ml-4 px-4 py-2 outline-none w-40 h-12 text-red-600 
    hover:text-white hover:bg-red-600` }
          data-testid="customer_checkout__element-order-total-price"
        >
          {`Total: R$ ${myProducts
            .reduce((acc, curr) => acc + curr.total, 0)
            .toFixed(2)
            .replace('.', ',')}`}
        </p>
      </section>
    </table>
  );
}

export default TableDetailsProductsCheckout;
