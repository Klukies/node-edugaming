const express = require('express');
const router = express.Router();
const authJwt = require('../middleware/verifyJwtToken');
const coachController = require('../controllers/coachController.js');

router.get(
  '/', [authJwt.verifyToken], coachController.coachContent
);

module.exports = router;
