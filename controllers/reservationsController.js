const db = require('../config/db.config.js');
const config = require('../config/config.js');
const jwt = require('jsonwebtoken');
const Coach = db.coach;
const User = db.users;
const Reservation = db.reservation;

exports.coachReservations = (req, res) => {
  Reservation.findAll({
    attributes: ['reservation_time', 'confirmed'],
    where: {
      coach_id: req.coach_id
    },
    include: [{
      model: User,
      attributes: ['name', 'email']
    }],
    order: [
      'reservation_time'
    ]
  }).then(reservations => {
    res.status(200).json({reservations});
  })
}
