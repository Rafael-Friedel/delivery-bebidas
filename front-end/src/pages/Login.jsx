import React, { useState } from 'react';
import FormLogin from '../components/FormLogin';

function Login() {
  const [alert, setAlert] = useState(false);

  return (
    <section>
      <FormLogin />
      {alert && (
        <p data-testid="element-invalid-email">
          Usuário não encontrado, verifique se seu e-mail e senha estão corretos
          e tente novamente
        </p>
      )}
      <button type="button" onClick={ () => setAlert(!alert) }>
        Teste
      </button>
    </section>
  );
}

export default Login;
