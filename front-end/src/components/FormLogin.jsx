import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import myContext from "../context/myContext";

function FormLogin() {
  const navigate = useNavigate();
  const { handleChange } = useContext(myContext);
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const [isDisabled, setIsDisabled] = useState(true);

  const validEmail = (email) => /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email);

  useEffect(() => {
    const { email, password } = login;
    const min = 6;
    let isDisab = true;
    if (password.length >= min && validEmail(email)) isDisab = false;
    setIsDisabled(isDisab);
  }, [login]);

  const buttonLogin = () => {
    navigate("/homepage");
  };

  return (
    <form>
      <label htmlFor="email">
        Login
        <input
          id="email"
          data-testid="common_login__input-email"
          onChange={(e) => handleChange(e, login, setLogin)}
          name="email"
          placeholder="Seu e-mail"
          value={login.email}
        />
      </label>
      <label htmlFor="password">
        Senha
        <input
          id="password"
          data-testid="common_login__input-password"
          onChange={(e) => handleChange(e, login, setLogin)}
          name="password"
          placeholder="Sua senha"
          value={login.password}
          type="password"
        />
      </label>
      <button
        type="button"
        disabled={isDisabled}
        onClick={buttonLogin}
        data-testid="common_login__button-login"
      >
        LOGIN
      </button>
      <button
        type="button"
        onClick={() => navigate("/register")}
        data-testid="common_login__button-register"
      >
        Ainda não tenho conta
      </button>
    </form>
  );
}

export default FormLogin;
