import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import myContext from '../context/myContext';
import createUser from '../fetchs/createUser';
import validFormRegister from '../helpers/validFormRegister';

function FormRegister() {
  const navigate = useNavigate();
  const { handleChange, setAlertRegister } = useContext(myContext);
  const [register, setRegister] = useState({
    name: '',
    email: '',
    password: '',
  });

  const buttonRegister = async () => {
    const response = await createUser(register);
    const statusSucess = 201;
    if (response.status !== statusSucess) setAlertRegister(true);
    else navigate('/login');
  };

  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    setAlertRegister(false);
    const isDisab = validFormRegister(register);
    setIsDisabled(isDisab);
  }, [register]);

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
        disabled={ isDisabled }
      >
        CADASTRAR
      </button>
    </form>
  );
}

export default FormRegister;
