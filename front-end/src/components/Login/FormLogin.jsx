import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import myContext from '../../context/myContext';
import loginUser from '../../fetchs/loginUser';
import validFormLogin from '../../helpers/validFormLogin';
import { setUser } from '../../services/localStorage';

function FormLogin() {
  const navigate = useNavigate();
  const { handleChange, setAlertLogin, setUserData } = useContext(myContext);
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });

  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    const isDisab = validFormLogin(login);
    setIsDisabled(isDisab);
  }, [login]);

  const buttonLogin = async () => {
    const response = await loginUser(login);
    if (response.message) setAlertLogin(true);
    else {
      setUserData(response);
      setUser(response);
      if (response.role === 'customer') navigate('/customer/products');
      if (response.role === 'seller') navigate('/seller/orders');
      if (response.role === 'administrator') navigate('/admin/manage');
    }
  };

  return (
    <form className="flex-grow w-full mt-8">
      <input
        id="email"
        data-testid="common_login__input-email"
        onChange={ (e) => handleChange(e, login, setLogin) }
        name="email"
        placeholder="Seu e-mail"
        value={ login.email }
        className={ `flex-1 w-full text-gray-700 bg-gray-200 rounded-md 
        hover:bg-white border border-gray-200 outline-none focus:bg-white py-2 px-4 m-2` }
      />
      <input
        id="password"
        data-testid="common_login__input-password"
        onChange={ (e) => handleChange(e, login, setLogin) }
        name="password"
        placeholder="Sua senha"
        value={ login.password }
        type="password"
        className={ `flex-1 w-full text-gray-700 bg-gray-200 rounded-md 
        hover:bg-white border border-gray-200 
        outline-none focus:bg-white py-2 px-4 m-2 mb-4` }
      />
      <button
        type="button"
        disabled={ isDisabled }
        onClick={ buttonLogin }
        data-testid="common_login__button-login"
        className={ `bg-teal-500 hover:bg-teal-600 outline-none py-2 
        px-4 ml-4 text-white font-semibold rounded-md` }
      >
        LOGIN
      </button>
      <button
        type="button"
        onClick={ () => navigate('/register') }
        data-testid="common_login__button-register"
        className={ `text-red-600 hover:text-white hover:bg-red-600 border 
        border-red-500 font-semibold rounded-md ml-4 px-4 py-2 outline-none` }
      >
        Ainda n??o tenho conta
      </button>
    </form>
  );
}

export default FormLogin;
