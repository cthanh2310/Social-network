const jwt = require('jsonwebtoken');

exports.verifyToken = async (req, res, next) => {
  // Access Authorization from Header
  try {
    const Authorization = req.headers['authorization'];
    if (!Authorization) {
      // Error: Unauthorized
      const err = new Error('Unauthorized!');
      err.statusCode = 400;
      return next(err);
    }
    // if has authorization --> Get token
    // token is has this form: Bearer  abacbacb...
    const token = Authorization.replace('Bearer', '').trim(); // remove Bearer

    const { userId } = jwt.verify(token, process.env.APP_SECRET);

    console.log(userId);
    // Assign req
    req.user = { userId };
    next();
  } catch (err) {
    return next(err);
  }
};
