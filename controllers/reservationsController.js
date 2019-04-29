const db = require('../config/db.config.js');
const config = require('../config/config.js');
const jwt = require('jsonwebtoken');
const Coach = db.coach;
const Reservation = db.reservation;

exports.coachReservations = (req, res) => {
  Reservation.findAll({
    where: {
      coach_id: req.coach_id
    }
  }).then(reservations => {
    res.status(200).json({reservations})
  })
}
