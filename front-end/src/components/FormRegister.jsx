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
    else navigate('/customer/products');
  };

  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    setAlertRegister(false);
    const isDisab = validFormRegister(register);
    setIsDisabled(isDisab);
  }, [register]);

  return (
    <form className="flex-grow w-full mt-8">
      <label htmlFor="name">
        Nome
        <input
          id="name"
          data-testid="common_register__input-name"
          onChange={ (e) => handleChange(e, register, setRegister) }
          name="name"
          placeholder="Seu nome"
          value={ register.name }
          className={ `flex-1 w-full text-gray-700 bg-gray-200 rounded-md 
        hover:bg-white border border-gray-200 outline-none focus:bg-white py-2 px-4 m-2` }
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
          className={ `flex-1 w-full text-gray-700 bg-gray-200 rounded-md 
        hover:bg-white border border-gray-200 outline-none focus:bg-white py-2 px-4 m-2` }
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
          className={ `flex-1 w-full text-gray-700 bg-gray-200 rounded-md 
        hover:bg-white border border-gray-200 
        outline-none focus:bg-white py-2 px-4 m-2 mb-4` }
        />
      </label>
      <section className="text-center">
        <button
          type="button"
          onClick={ buttonRegister }
          data-testid="common_register__button-register"
          disabled={ isDisabled }
          className={ `bg-teal-500 hover:bg-teal-600 outline-none py-2 
        px-4 ml-4 text-white font-semibold rounded-md text-center` }
        >
          CADASTRAR
        </button>
      </section>
    </form>
  );
}

export default FormRegister;
