import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  return (
    <header className="flex justify-between bg-teal-900 h-16">
      <nav className="flex">
        <Link
          to="customer/products"
          className="hover:bg-teal-600 hover:rounded-md m-4 ml-20 px-4 text-white"
        >
          Produtos
        </Link>
        <Link
          to="customer/orders/:id"
          className="hover:bg-teal-600 hover:rounded-md m-4 text-white px-4"
        >
          Meus Pedidos
        </Link>
      </nav>
      <section className="flex">
        <p className="bg-teal-500 py-5 px-4 text-white">Nome do Usuário</p>
        <button
          type="button"
          onClick={ () => {
            navigate('/');
          } }
          className="bg-red-800 text-white w-20"
        >
          Sair
        </button>
      </section>
    </header>
  );
}

export default Header;
