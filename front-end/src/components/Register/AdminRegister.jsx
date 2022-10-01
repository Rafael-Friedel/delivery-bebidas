import React, { useContext, useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import myContext from '../../context/myContext';
import createUser from '../../fetchs/adminCreateUser';
import validFormRegister from '../../helpers/validFormRegister';
import { getUser } from '../../services/localStorage';

function FormRegister() {
  // const navigate = useNavigate();
  const { handleChange, setAlertRegister } = useContext(myContext);
  const [register, setRegister] = useState({
    name: '',
    email: '',
    password: '',
    role: '',
  });

  const buttonRegister = async () => {
    const user = getUser();
    const response = await createUser(register, user.token);
    const statusSucess = 201;

    if (response.status !== statusSucess) {
      setAlertRegister(true);
      setRegister({
        name: '',
        email: '',
        password: '',
        role: '',
      });
    }
    // else navigate('/customer/products');
  };

  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    // setAlertRegister(false);
    const isDisab = validFormRegister(register);
    setIsDisabled(isDisab);
  }, [register]);

  return (
    <form className="flex-grow w-full mt-8">
      <label htmlFor="name">
        Nome
        <input
          id="name"
          data-testid="admin_manage__input-name"
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
          data-testid="admin_manage__input-email"
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
          data-testid="admin_manage__input-password"
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
      <label htmlFor="role">
        <select
          id="role"
          name="role"
          data-testid="admin_manage__select-role"
          className={ `flex-1 w-full text-gray-700 bg-gray-200 rounded-md 
        hover:bg-white border border-gray-200 outline-none 
        focus:bg-white py-2 px-4 m-2 w-56` }
          onChange={ (e) => handleChange(e, register, setRegister) }
        >
          <option value="select" disabled selected className="text-center">
            --select--
          </option>
          <option value="administrator">Admin</option>
          <option value="seller">Vendedor</option>
          <option value="customer">Cliente</option>
        </select>
      </label>

      <section className="text-center">
        <button
          type="button"
          onClick={ buttonRegister }
          data-testid="admin_manage__button-register"
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
