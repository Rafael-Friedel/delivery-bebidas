const userService = require('../services/User');

async function register(req, res) {
  const userData = req.body;

  await userService.create(userData);

  res.status(201).json({ message: 'Created' });
}

module.exports = register;