const env = require('./env.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.user, env.password, {
  host: env.host,
  dialect: env.dialect,

  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
  }
});

const db = {
  Sequelize,
  sequelize,
  coach: require('../models/Coach.js')(sequelize, Sequelize),
  game: require('../models/Game.js')(sequelize, Sequelize),
  reservation: require('../models/Reservation.js')(sequelize, Sequelize),
  users: require('../models/User.js')(sequelize, Sequelize),
};

db.coach.belongsTo(db.game);
db.reservation.belongsTo(db.coach, {foreignKey: 'coach_id', targetKey: 'coach_id'});
db.reservation.belongsTo(db.users, {foreignKey: 'user_id', targetKey: 'id'});

module.exports = db;
