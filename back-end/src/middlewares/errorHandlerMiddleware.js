const errors = {
  ValidationError: 400,
  UnauthorizedError: 401, 
  NotExistError: 404,
  ConflictError: 409,  
};

const errorHandlerMiddleware = ({ name, message }, _req, res, _next) => {
  const status = errors[name];
  if (!status) return res.status(500).json({ message });
  res.status(status).json({ message });
};

module.exports = errorHandlerMiddleware;