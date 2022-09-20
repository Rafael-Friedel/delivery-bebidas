import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import myContext from '../context/myContext';

function FormRegister() {
  const navigate = useNavigate();
  const { handleChange } = useContext(myContext);

  const [register, setRegister] = useState({
    name: '',
    email: '',
    password: '',
  });

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
          data-testid="common_register__input-name"
          onChange={ (e) => handleChange(e, register, setRegister) }
          name="name"
          placeholder="Seu nome"
          value={ register.name }
        />
      </label>
      <label htmlFor="email">
        E-mail
        <input
          id="email"
          data-testid="common_register__input-email"
          onChange={ (e) => handleChange(e, register, setRegister) }
          name="email"
          placeholder="Seu e-mail"
          value={ register.email }
        />
      </label>
      <label htmlFor="password">
        Senha
        <input
          id="password"
          data-testid="common_register__input-password"
          onChange={ (e) => handleChange(e, register, setRegister) }
          name="password"
          placeholder="Sua senha"
          value={ register.password }
          type="password"
        />
      </label>
      <button
        type="button"
        onClick={ buttonRegister }
        data-testid="common_register__button-register"
      >
        CADASTRAR
      </button>
    </form>
  );
}

export default FormRegister;
