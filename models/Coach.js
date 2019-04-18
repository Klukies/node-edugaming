module.exports = (sequelize, Sequelize) => {
  const Coach = sequelize.define('coaches', {
    coach_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    summary: {
      type: Sequelize.TEXT
    },
    description: {
      type: Sequelize.TEXT
    },
    img_url: {
      type: Sequelize.STRING
    },
    price: {
      type: Sequelize.INTEGER
    },
    game_id: {
      type: Sequelize.INTEGER
    }
  }, {
    underscored: true
  });
  return Coach;
}
