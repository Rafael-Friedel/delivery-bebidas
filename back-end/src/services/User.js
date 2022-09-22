const md5 = require('md5');

const model = require('../database/models');

const { throwNotExistError, throwConflictError } = require('./utils');

const authService = require('./authService');

const userService = {
  getByEmail: async (obj) => {
    const user = await model.User.findOne({ where: { email: obj.email } });
    if (!user) {
      return throwNotExistError('Not found');
    }
    
    const descript = md5(obj.password);

    if (descript !== user.password) {
      return throwNotExistError('Not found');
    }

    const token = await authService.generateToken(user.email);

    const userToReturn = {
      name: user.name,
      email: user.email,
      role: user.role,
      token,      
    };
    
    return userToReturn;
  },

  create: async (object, role = 'customer') => {    
    const email = await model.User.findOne({ where: { email: object.email } });
    // const name = await model.User.findOne({ where: { name: object.name } });

    if (email) {
      return throwConflictError();
    }

    const encripetedPass = md5(object.password);

    const created = await model.User.create({ ...object, role, password: encripetedPass });

    return created;
  },

/*
  getAll: async () => {
    const user = await model.User.findAll({ 
      attributes: { 
        exclude: ['password'], 
      }, 
    });
    return user;
  },
  getById: async (id) => {
    const user = await model.User
    .findOne({ where: { id }, attributes: { exclude: ['password'] } });    
    return user;
  }, */
};

module.exports = userService;