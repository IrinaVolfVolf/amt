const jwt = require('jwt-then');
const config = require('config')

module.exports = async (req, res, next) => {
  try {
    if (!req.headers.authorization) throw "Forbidden uhh!!";
    const token = req.headers.authorization.split(' ')[1];
    console.log(token);
    const payload = await jwt.verify(token, config.get('jwtSecret'));
    console.log(payload);
    req.payload = payload;
    next();
  } catch (err) {
    res.status(401).json({
      message: "Forbidden 401 UnAuthorized",
    });
  }
};
