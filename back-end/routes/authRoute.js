const express = require('express');
const {login, register, getCurrentUser} = require('../controllers/authController')
const Router = express.Router();
const { checkCurrentUser } = require('../middlewares/checkCurrentUser');

Router.route('/register').post(register);
Router.route('/login').post(login);
Router.route('/').get(checkCurrentUser, getCurrentUser);

module.exports = Router;