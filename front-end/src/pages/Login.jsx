import React, { useContext } from 'react';
import FormLogin from '../components/FormLogin';
import myContext from '../context/myContext';

function Login() {
  const { alertLogin, setAlertLogin } = useContext(myContext);

  return (
    <section>
      {/* inserir logo, e nome do nosso app */}
      <FormLogin />
      {alertLogin && (
        <p data-testid="common_login__element-invalid-email">
          Usuário não encontrado, verifique se seu e-mail e senha estão corretos
          e tente novamente
        </p>
      )}
      <button type="button" onClick={ () => setAlertLogin(!alertLogin) }>
        Teste
      </button>
    </section>
  );
}

export default Login;
