import React, { useContext } from 'react';
import FormRegister from '../components/FormRegister';
import myContext from '../context/myContext';

function Register() {
  const { alertRegister } = useContext(myContext);
  return (
    <section className="lg:min-h-screen lg:flex lg:items-center p-12 lg:p-48 xl:px-96 ">
      <section
        className={ `flex-grow bg-white shadow-xl
    rounded-md border border-gray-300 p-8 justify-items-center w-2/4` }
      >
        <h2 className="text-current text-3xl text-center">Cadastro</h2>
        <FormRegister />
        {alertRegister && (
          <p
            data-testid="common_register__element-invalid_register"
            className="text-center"
          >
            Não foi possível criar sua conta, tente outro nome ou e-mail.
          </p>
        )}
      </section>
    </section>
  );
}

export default Register;
