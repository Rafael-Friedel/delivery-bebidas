import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import myContext from '../context/myContext';

function FormDetailAdress() {
  const navigate = useNavigate();

  const { handleChange } = useContext(myContext);

  const [formSale, setFormSale] = useState({
    salesPerson: 'select',
    address: '',
    number: '',
  });

  console.log(formSale);

  const finalizeOrder = (id) => {
    navigate(`/customer/orders/${id}`);
  };

  return (
    <section>
      <form className="w-full shadow-xl flex">
        <label htmlFor="salesperson" className="text-center">
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
            <option className="text-center" value="vendedor-1">
              ciclano da silva
            </option>
            <option className="text-center" value="vendedor-2">
              beltrano pereira
            </option>
          </select>
        </label>
        <label htmlFor="adress" className="text-center">
          Endereço:
          <input
            id="adress"
            data-testid="customer_checkout__input-address"
            name="address"
            placeholder="Endereço de entrega"
            value={ formSale.address }
            onChange={ (e) => handleChange(e, formSale, setFormSale) }
            className={ `flex-1 w-full text-gray-700 bg-gray-200 rounded-md 
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
            className={ `flex-1 w-full text-gray-700 bg-gray-200 rounded-md 
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
          onClick={ () => finalizeOrder(1) }
        >
          Finalizar Pedido
        </button>
      </section>
    </section>
  );
}

export default FormDetailAdress;
