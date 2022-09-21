// const crypto = require('crypto');
// const bcrypt = require('bcrypt');
const md5 = require('md5');

const model = require('../database/models');

const { throwNotExistError } = require('./utils');

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
    return token;
  },

  /* create: async (object) => {
    const [, created] = await model.User
    .findOrCreate({ where: { email: object.email },
    default: {
      ...object,
    } });
    return created;
  },

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