import React from 'react';
import logo from '../images/logo.png';

function Logo() {
  <section className="sm:flex sm:items-center justify-center">
    <img
      src={ logo }
      alt="logo do app"
      className="sm:flex-shrink-0 mx-auto sm:mx-0 h-24 rounded-full"
    />
    <p className="text-xl">Desce + 1</p>
  </section>;
}

export default Logo;
