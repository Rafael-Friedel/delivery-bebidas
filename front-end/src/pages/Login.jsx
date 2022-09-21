import React, { useContext } from 'react';
import FormLogin from '../components/FormLogin';
import myContext from '../context/myContext';
import logo from '../images/logo.png';

function Login() {
  const { alertLogin, setAlertLogin } = useContext(myContext);

  return (
    <section className="bg-indigo-100">
      <section className="grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-blue-600 lg:min-h-screen lg:flex lg:items-center p-8 sm:p-12">
          <section className="flex-grow">
            <h1 className="text-white text-center text-2xl sm:text5xl mb-2">
              Seja bem-vindo(a)
            </h1>
            <p className="text-center text-blue-200 sm:text-lg">
              Faça seu login para começar
            </p>
          </section>
        </div>
        <section className="lg:min-h-screen lg:flex lg:items-center p-12 lg:p-24 xl:p-48">
          <section className="flex-grow bg-white shadow-xl rounded-md border border-gray-300 p-8">
            <section className="sm:flex sm:items-center justify-center">
              <img
                src={ logo }
                alt="logo do app"
                className="sm:flex-shrink-0 mx-auto sm:mx-0 h-24 rounded-full"
              />
              <p className="text-xl">Desce + 1</p>
            </section>
            <FormLogin />
            {alertLogin && (
              <p data-testid="common_login__element-invalid-email">
                Usuário não encontrado, verifique se seu e-mail e senha estão
                corretos e tente novamente
              </p>
            )}
            <button type="button" onClick={ () => setAlertLogin(!alertLogin) }>
              Teste
            </button>
          </section>
        </section>
      </section>
    </section>
  );
}

export default Login;
