const express = require('express');
const router = express.Router();
const verifySignUp = require('../middleware/verifySignUp');
const authJwt = require('../middleware/verifyJwtToken');
const authController = require('../controllers/authController.js');

router.post(
  '/register', verifySignUp.checkDuplicateUserNameOrEmail, authController.signup
);

router.post('/login', authController.login);

router.get('/user', [authJwt.verifyToken], authController.userContent);

module.exports = router;
