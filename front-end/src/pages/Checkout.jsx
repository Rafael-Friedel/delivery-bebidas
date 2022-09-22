import React from 'react';
import DetailsProductsCheckout from '../components/DetailsProductsCheckout';
import DetailsSaleCheckout from '../components/DetailsSaleCheckout';

function Checkout() {
  return (
    <section>
      <header> Header</header>
      <section className="px-20 py-5">
        <h2 className="py-5">Detalhes do Pedido:</h2>
        <DetailsSaleCheckout />
        <DetailsProductsCheckout />
      </section>
    </section>
  );
}

export default Checkout;
