const model = require('../database/models');
const { throwInvalidFields } = require('./utils');

const userService = {
  getByEmail: async (email) => {
    const user = await model.Users.findOne({ where: { email } });
    if (!user) {
      return throwInvalidFields();
    }
    return user;
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