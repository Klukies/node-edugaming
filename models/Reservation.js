module.exports = (sequelize, Sequelize) => {
  const Reservation = sequelize.define('reservations', {
    user_id: {
      type: Sequelize.INTEGER
    },
    coach_id: {
      type: Sequelize.INTEGER
    },
    reservation_time: {
      type: Sequelize.DATE
    },
    confirmed: {
      type: Sequelize.BOOLEAN
    }
  }, {
    timestamps: false
  });
  Reservation.removeAttribute('id');
  return Reservation;
}
