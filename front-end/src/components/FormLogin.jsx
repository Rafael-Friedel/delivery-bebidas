import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function FormLogin() {
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });

  const [isDisabled, setIsDisabled] = useState(true);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setLogin({ ...login, [name]: value });
  };

  const validEmail = (email) => /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email);

  useEffect(() => {
    const { email, password } = login;
    const min = 6;
    let isDisab = true;
    if (password.length >= min && validEmail(email)) isDisab = false;
    setIsDisabled(isDisab);
  }, [login]);

  const buttonLogin = () => {
    navigate('/homepage');
  };

  return (
    <form>
      <label htmlFor="email">
        Login
        <input
          id="email"
          data-testid="input-email"
          onChange={ handleChange }
          name="email"
          placeholder="Seu e-mail"
          value={ login.email }
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
          value={ login.password }
          type="password"
        />
      </label>
      <button
        type="button"
        disabled={ isDisabled }
        onClick={ buttonLogin }
        data-testid="button-login"
      >
        LOGIN
      </button>
      <button
        type="button"
        onClick={ () => navigate('/register') }
        data-testid="button-register"
      >
        Ainda não tenho conta
      </button>
    </form>
  );
}

export default FormLogin;
