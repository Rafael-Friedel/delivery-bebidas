const userService = require('../services/User');

const userController = {
  findAll: async (req, res) => {
    const users = await userService.getAll();

    return res.status(200).json(users);
  },

  findSellers: async (req, res) => {
    const sellers = await userService.getAllSellers();   

    return res.status(200).json(sellers);
  },

  create: async (req, res) => {  
    const userWithToken = await userService.getByEmail(req.body);
    
    return res.status(200).json(userWithToken);
  },
};

module.exports = userController;