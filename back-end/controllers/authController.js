const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.register = async (req, res, next) => {
  try {
    // use await because User.create is Promise :))
    const user = await User.create(req.body);
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
    res.status(200).json({
      status: 'success',
      data: { token, userName: user.name },
    });
  } catch (err) {
    next(err);
  }
};
exports.login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      // email is not correct!!!
      const err = new Error('Email is not correct');
      err.statusCode = 400;
      return next(err);
    }
    if (bcrypt.compareSync(req.body.password, user.password)) {
      const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
      res.status(200).json({
        status: 'Success!',
        data: { token, userName: user.name },
      });
    } else {
      // Error password is not correct
      const err = new Error('Password is not correct');
      err.statusCode = 400;
      return next(err);
    }
  } catch (err) {
      return next(err);
  }
};

exports.getCurrentUser = async (req, res, next) => {
  try {
    const data = { user: null};
    if(req.user) {
      const user = await User.findOne({_id: req.user.userId});
      data.user = { userName: user.name};
    }
    res.status(200).json({
      status: 'success',
      data: data
    });
  } catch(err) {
    return next(err);
  }
}