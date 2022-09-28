import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import myContext from '../context/myContext';
import listSellers from '../fetchs/listSellers';
import registerSale from '../fetchs/registerSale';
import {
  clearProducts,
  readProducts,
} from '../services/localStorageCartProducts';

function FormDetailAdress() {
  const navigate = useNavigate();

  const { handleChange, userData } = useContext(myContext);

  const [formSale, setFormSale] = useState({
    salesPerson: 'select',
    address: '',
    number: '',
  });

  const [sellers, setSellers] = useState([]);

  const [alert, setAlert] = useState(false);

  const finalizeOrder = async () => {
    const myProducts = readProducts();
    const sale = {
      userId: userData.id,
      sellerId: +formSale.salesPerson,
      totalPrice: +myProducts
        .reduce((acc, curr) => acc + curr.total, 0)
        .toFixed(2),
      deliveryAddress: formSale.address,
      deliveryNumber: +formSale.number,
      products: myProducts.map(({ id: pId, quantity }) => ({
        productId: pId,
        quantity,
      })),
    };

    const response = await registerSale(sale, userData.token);
    if (response.message) setAlert(true);
    else {
      navigate(`/customer/orders/${response.id}`);
      clearProducts();
    }
  };

  const getNameSellers = async () => {
    const allSellers = await listSellers();
    setSellers(allSellers);
  };

  useEffect(() => {
    getNameSellers();
    setAlert(false);
  }, []);

  return (
    <section>
      <form className="w-full shadow-xl flex">
        <label htmlFor="salesperson" className="text-center px-10">
          P. Vendedora responsável:
          <select
            id="salesperson"
            data-testid="customer_checkout__select-seller"
            name="salesPerson"
            value={ formSale.salesPerson }
            onChange={ (e) => handleChange(e, formSale, setFormSale) }
            className={ `flex-1 w-full text-gray-700 bg-gray-200 rounded-md 
        hover:bg-white border border-gray-200 outline-none 
        focus:bg-white py-2 px-4 m-2 w-56` }
          >
            <option value="select" disabled selected className="text-center">
              --select--
            </option>
            {sellers.map(({ id, name }) => (
              <option className="text-center" value={ id } key={ id }>
                {name}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="adress" className="text-center px-2">
          Endereço:
          <input
            id="adress"
            data-testid="customer_checkout__input-address"
            name="address"
            placeholder="Endereço de entrega"
            value={ formSale.address }
            onChange={ (e) => handleChange(e, formSale, setFormSale) }
            className={ `flex-1 text-gray-700 bg-gray-200 rounded-md 
        hover:bg-white border border-gray-200 outline-none focus:bg-white py-2 px-4 m-2` }
          />
        </label>
        <label htmlFor="number" className="text-center">
          Número
          <input
            id="number"
            data-testid="customer_checkout__input-addressNumber"
            name="number"
            placeholder="Nº casa/apt"
            value={ formSale.number }
            onChange={ (e) => handleChange(e, formSale, setFormSale) }
            className={ `flex-1 text-gray-700 bg-gray-200 rounded-md 
        hover:bg-white border border-gray-200 
        outline-none focus:bg-white py-2 px-4 m-2 mb-4 w-20` }
          />
        </label>
      </form>
      <section className="text-center py-5">
        <button
          type="button"
          className={ `bg-teal-500 hover:bg-teal-600 outline-none py-2 
        px-4 ml-4 text-white font-semibold rounded-md text-center` }
          data-testid="customer_checkout__button-submit-order"
          onClick={ finalizeOrder }
        >
          Finalizar Pedido
        </button>
        {alert && (
          <p>
            Aconteceu algum erro!! Verifique se o formulário de entrega está
            preenchido corretamente ou, faça o login e tente novamente por favor
          </p>
        )}
      </section>
    </section>
  );
}

export default FormDetailAdress;
