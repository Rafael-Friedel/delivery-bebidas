require('dotenv').config();

const jwt = require('jsonwebtoken');
const Joi = require('joi');
const { throwUnauthorizedError } = require('./utils');

const secret = process.env.JWT_SECRET;

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

  /* validateUserBody: async (body) => {
    const schema = Joi.object({
      displayName: Joi.string().min(8).max(255).required(),
      email: Joi.string().email().required().max(255),
      password: Joi.string().min(6).max(255).required(),
      image: Joi.string().max(255).required(),
    });
    const result = schema.validateAsync(body);
    return result;
  },

  validateCategoryBody: async (body) => {
    const schema = Joi.object({
      name: Joi.string().required().max(255),
    });
    const result = schema.validateAsync(body);
    return result;
  }, */

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