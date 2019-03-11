module.exports = (sequelize, Sequelize) => {
  const Game = sequelize.define('games', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: Sequelize.STRING
    },
    img_name: {
      type: Sequelize.STRING
    },
    createdAt: {
      type: 'TIMESTAMP',
      field: 'created_at',
      allowNull: true
    },
    updatedAt: {
      type: 'TIMESTAMP',
      field: 'updated_at',
      allowNull: true
    }
  });
  return Game;
}
