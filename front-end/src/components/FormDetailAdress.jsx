import React from 'react';

function FormDetailAdress() {
  return (
    <section>
      <form className="w-full shadow-xl flex">
        <label htmlFor="salesperson" className="text-center">
          P. Vendedora responsável:
          <select
            id="salesperson"
            data-testid="customer_checkout__select-seller"
            name="salesperson"
            className={ `flex-1 w-full text-gray-700 bg-gray-200 rounded-md 
        hover:bg-white border border-gray-200 outline-none 
        focus:bg-white py-2 px-4 m-2 w-56` }
          >
            <option className="text-center">ciclano da silva</option>
            <option className="text-center">beltrano pereira</option>
          </select>
        </label>
        <label htmlFor="adress" className="text-center">
          Endereço:
          <input
            id="adress"
            data-testid="customer_checkout__input-address"
            name="adress"
            placeholder="Endereço de entrega"
            className={ `flex-1 w-full text-gray-700 bg-gray-200 rounded-md 
        hover:bg-white border border-gray-200 outline-none focus:bg-white py-2 px-4 m-2` }
          />
        </label>
        <label htmlFor="number" className="text-center">
          Número
          <input
            id="number"
            data-testid="customer_checkout__input-addressNumber"
            name="number house"
            placeholder="Nº casa/apt"
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
        >
          Finalizar Pedido
        </button>
      </section>
    </section>
  );
}

export default FormDetailAdress;
