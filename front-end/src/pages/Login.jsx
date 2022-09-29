import React, { useContext } from 'react';
import FormLogin from '../components/Login/FormLogin';
import Logo from '../components/Login/Logo';
import myContext from '../context/myContext';

function Login() {
  const { alertLogin } = useContext(myContext);

  return (
    <section className="bg-indigo-100">
      <section className="grid grid-cols-1 lg:grid-cols-2">
        <section
          className={ `bg-blue-600 lg:min-h-screen 
        lg:flex lg:items-center p-8 sm:p-12` }
        >
          <section className="flex-grow">
            <h1 className="text-white text-center text-2xl sm:text5xl mb-2">
              Seja bem-vindo(a)
            </h1>
            <p className="text-center text-blue-200 sm:text-lg">
              Faça seu login para começar
            </p>
          </section>
        </section>
        <section className="lg:min-h-screen lg:flex lg:items-center p-12 lg:p-24 xl:p-48">
          <section
            className={ `flex-grow bg-white shadow-xl 
          rounded-md border border-gray-300 p-8` }
          >
            <Logo />
            <FormLogin />
            {alertLogin && (
              <p data-testid="common_login__element-invalid-email">
                Usuário não encontrado, verifique se seu e-mail e senha estão
                corretos e tente novamente
              </p>
            )}
          </section>
        </section>
      </section>
    </section>
  );
}

export default Login;
