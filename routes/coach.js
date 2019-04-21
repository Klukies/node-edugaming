const express = require('express');
const router = express.Router();
const authJwt = require('../middleware/verifyJwtToken');
const coachController = require('../controllers/coachController.js');

router.get(
  '/', [authJwt.verifyToken], coachController.coachContent
);

router.post(
  '/username', [authJwt.verifyToken], coachController.updateUsername
);

router.post(
  '/game', [authJwt.verifyToken], coachController.updateGameId
);

router.post(
  '/price', [authJwt.verifyToken], coachController.updatePrice
);

router.post(
  '/summary', [authJwt.verifyToken], coachController.updateSummary
);

router.post(
  '/description', [authJwt.verifyToken], coachController.updateDescription
);

module.exports = router;
