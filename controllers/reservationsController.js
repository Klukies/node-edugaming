const db = require('../config/db.config.js');
const config = require('../config/config.js');
const jwt = require('jsonwebtoken');
const Coach = db.coach;
const User = db.users;
const Reservation = db.reservation;

exports.coachReservations = (req, res) => {
  //todo only give the one where date hasn't passed yet
  Reservation.findAll({
    attributes: ['user_id', 'reservation_time', 'confirmed'],
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

exports.coachHandleReservation = (req, res) => {
  Reservation.update({ confirmed: req.body.confirmed }, {
    where: {
      user_id: req.body.user_id,
      coach_id: req.coach_id,
      reservation_time: req.body.reservation_time.split('"')[1]
    }
  }).then(() => {
    res.status(200).json({
      success: "Reservation has been updated"
    })
  })
}
