import React, { useState } from 'react';
import FormRegister from '../components/FormRegister';

function Register() {
  const [alert, setAlert] = useState(false);
  return (
    <section>
      <FormRegister />
      {alert && (
        <p data-testid="element-invalid-fields">
          Mensagem que vem do Back-End ex: invalidFields
        </p>
      )}
      <button type="button" onClick={ () => setAlert(!alert) }>
        Teste
      </button>
    </section>
  );
}

export default Register;
