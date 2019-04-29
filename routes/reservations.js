const express = require('express');
const router = express.Router();
const authJwt = require('../middleware/verifyJwtToken');
const reservationsController = require('../controllers/reservationsController.js');

router.get(
  '/', [authJwt.verifyToken], reservationsController.coachReservations
);

module.exports = router;
