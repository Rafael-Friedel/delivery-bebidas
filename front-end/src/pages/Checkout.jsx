import React from 'react';
import FormDetailAdress from '../components/FormDetailAdress';
import HeaderClient from '../components/HeaderClient';
import TableDetailsProductsCheckout from '../components/TableDetailsProductsCheckout';

function Checkout() {
  return (
    <section>
      <HeaderClient />
      <section className="px-20 py-5">
        <h2 className="py-5">Finalizar Pedido</h2>
        <TableDetailsProductsCheckout />
      </section>
      <section className="px-20 py-5">
        <h2 className="px-5 py-2">Detalhes e Endereço para entrega</h2>
        <FormDetailAdress />
      </section>
    </section>
  );
}

export default Checkout;
