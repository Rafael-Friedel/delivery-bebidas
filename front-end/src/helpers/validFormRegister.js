import validEmail from './validEmail';

const validFormRegister = (state) => {
  const { email, password, name } = state;
  const minPass = 6;
  const minName = 12;
  let isDisab = true;
  if (
    password.length >= minPass
    && validEmail(email)
    && name.length >= minName
  ) {
    isDisab = false;
  }
  return isDisab;
};

export default validFormRegister;
