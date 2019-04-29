const jwt = require('jsonwebtoken');
const config = require('../config/config.js');
const db = require('../config/db.config.js');

verifyToken = (req, res, next) => {
  let token = req.headers['x-access-token'];
  token = token.split('"')[1];

  if (!token) {
    return res.status(403).send({
      auth: false,
      message: 'No token provided.'
    });
  }

  jwt.verify(token, config.secret, { algorithms: ['HS256'] } , (err, decoded) => {
    if (err) {
      return res.status(500).send({
        auth: false,
        message: 'Fail to Authentication. Error -> ' + err
      });
    }
    req.coach_id = decoded.coach_id;
    next();
  });
}

const authJwt = {};
authJwt.verifyToken = verifyToken;

module.exports = authJwt;
