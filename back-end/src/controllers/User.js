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

  findCustomers: async (req, res) => {
    const customers = await userService.getAllCustomers();   

    return res.status(200).json(customers);
  },

  create: async (req, res) => {  
    const userWithToken = await userService.getByEmail(req.body);
    
    return res.status(200).json(userWithToken);
  },

  findSellerById: async (req, res) => {
    const { sellerId } = req.body;
    const seller = await userService.getSellerById(sellerId);

    return res.status(200).json(seller);
  },
};

module.exports = userController;