import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function FormRegister() {
  const navigate = useNavigate();

  const [register, setRegister] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setRegister({ ...register, [name]: value });
  };

  const buttonRegister = () => {
    // fetch de post passando o register como body
    navigate('/login');
  };

  return (
    <form>
      <label htmlFor="name">
        Nome
        <input
          id="name"
          data-testid="input-name"
          onChange={ handleChange }
          name="name"
          placeholder="Seu nome"
          value={ register.name }
        />
      </label>
      <label htmlFor="email">
        E-mail
        <input
          id="email"
          data-testid="input-email"
          onChange={ handleChange }
          name="email"
          placeholder="Seu e-mail"
          value={ register.email }
        />
      </label>
      <label htmlFor="password">
        Senha
        <input
          id="password"
          data-testid="input-password"
          onChange={ handleChange }
          name="password"
          placeholder="Sua senha"
          value={ register.password }
          type="password"
        />
      </label>
      <button type="button" onClick={ buttonRegister } data-testid="button-login">
        CADASTRAR
      </button>
    </form>
  );
}

export default FormRegister;
