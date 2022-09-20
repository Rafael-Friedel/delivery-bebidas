const { validateBodyLogin } = require('../services/authService');
const userService = require('../services/User');

const loginController = async (req, res) => {
  console.log(req.body);
  await validateBodyLogin(req.body);
  const user = await userService.getByEmail(req.body);
  
  return res.status(200).json(user);
};

module.exports = loginController;