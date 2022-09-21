import validEmail from './validEmail';

const validFormLogin = (state) => {
  const { email, password } = state;
  const min = 6;
  let isDisab = true;
  if (password.length >= min && validEmail(email)) isDisab = false;
  return isDisab;
};

export default validFormLogin;
