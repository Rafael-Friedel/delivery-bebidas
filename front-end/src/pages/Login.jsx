import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
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
    const number = 6;
    let isDisab = true;
    if (password.length > number && validEmail(email)) isDisab = false;
    setIsDisabled(isDisab);
  }, [login]);

  const buttonLogin = () => {
    navigate('/homepage');
  };

  return (
    <form>
      <label htmlFor="email">
        EMAIL:
        <input
          id="email"
          onChange={ handleChange }
          name="email"
          value={ login.email }
        />
      </label>
      <label htmlFor="password">
        PASSWORD:
        <input
          id="password"
          onChange={ handleChange }
          name="password"
          value={ login.password }
        />
      </label>
      <button type="button" disabled={ isDisabled } onClick={ buttonLogin }>
        Enter
      </button>
      <button type="button" onClick={ () => navigate('/register') }>
        Criar conta
      </button>
    </form>
  );
}

export default Login;
