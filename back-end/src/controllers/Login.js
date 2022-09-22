const userService = require('../services/User');

const loginController = async (req, res) => {  
  const userWithToken = await userService.getByEmail(req.body);
  
  return res.status(200).json(userWithToken);
};

module.exports = loginController;