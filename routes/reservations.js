const express = require('express');
const router = express.Router();
const authJwt = require('../middleware/verifyJwtToken');
const reservationsController = require('../controllers/reservationsController.js');

router.get(
  '/', [authJwt.verifyToken], reservationsController.coachReservations
);

router.post(
  '/confirmation', [authJwt.verifyToken], reservationsController.coachHandleReservation
);

module.exports = router;
