module.exports = (sequelize, Sequelize) => {
  const Game = sequelize.define('games', {
    id: {
      field: "game_id",
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: Sequelize.STRING
    },
    img_name: {
      type: Sequelize.STRING
    }
  }, {
    underscored: true,
    timestamps: false
  });
  return Game;
}
