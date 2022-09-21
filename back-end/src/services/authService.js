require('dotenv').config();

const jwt = require('jsonwebtoken');
const Joi = require('joi');
const { throwUnauthorizedError } = require('./utils');

const secret = process.env.JWT_SECRET || 'senhasecreta';

const authService = {
  validateBodyLogin: async (body) => {
    const schema = Joi.object({
      email: Joi.string().email().required().max(255),
      password: Joi.string().required().max(255).min(6),
    }).messages({
      'string.empty': 'Some required fields are missing',
    });
    const result = await schema.validateAsync(body);
  
    return result;
  },

  generateToken: async (email) => {
    const token = jwt.sign({ data: email }, secret);
    return token;
  },

  readToken: async (token) => {
    try {
      const { data } = jwt.verify(token, secret);
      return data;
    } catch (err) {
      throwUnauthorizedError('Expired or invalid token');
    }
  },
};

module.exports = authService;