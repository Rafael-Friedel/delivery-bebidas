import React from 'react';
import FormDetailAdress from '../components/Checkout/FormDetailAdress';
import TableDetailsProducts from '../components/Checkout/TableDetailsProductsCheckout';
import HeaderClient from '../components/HeaderClient';

function Checkout() {
  return (
    <section>
      <HeaderClient />
      <section className="px-20 py-5">
        <h2 className="py-5">Finalizar Pedido</h2>
        <TableDetailsProducts />
      </section>
      <section className="px-20 py-5">
        <h2 className="px-5 py-2">Detalhes e Endereço para entrega</h2>
        <FormDetailAdress />
      </section>
    </section>
  );
}

export default Checkout;
