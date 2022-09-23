const { generateToken } = require('../services/authService');
const userService = require('../services/User');

async function register(req, res) {
  const userData = req.body;

  const user = await userService.create(userData);

  const token = await generateToken(user.email);

  const userToReturn = { ...user.dataValues, token };

  res.status(201).json(userToReturn);
}

module.exports = register;