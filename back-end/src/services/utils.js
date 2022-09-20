const throwNotExistError = (message) => {
  const err = new Error(message);
  err.name = 'NotExistError';
  throw err;
};

const throwUnauthorizedError = (message = 'Unauthorized user') => {
  const err = new Error(message);
  err.name = 'UnauthorizedError';
  throw err;
};

const throwAlreadyExistsError = (message = 'User already registered') => {
  const err = new Error(message);
  err.name = 'AlreadyExistsError';
  throw err;
};

const throwInvalidFields = (message = 'Invalid fields') => {
  const err = new Error(message);
  err.name = 'ValidationError';
  throw err;
};

module.exports = {
  throwNotExistError,
  throwUnauthorizedError,
  throwAlreadyExistsError,
  throwInvalidFields,
};