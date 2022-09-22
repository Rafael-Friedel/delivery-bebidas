import React, { useContext } from 'react';
import FormRegister from '../components/FormRegister';
import myContext from '../context/myContext';

function Register() {
  const { alertRegister } = useContext(myContext);
  return (
    <section>
      <h2>Cadastro</h2>
      <FormRegister />
      {alertRegister && (
        <p data-testid="common_register__element-invalid_register">
          Mensagem que vem do Back-End ex: invalidFields
        </p>
      )}
    </section>
  );
}

export default Register;
