const userService = require('../services/User');

const loginController = async (req, res) => {  
  const token = await userService.getByEmail(req.body);
  
  return res.status(200).json({ token });
};

module.exports = loginController;