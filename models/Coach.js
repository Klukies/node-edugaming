module.exports = (sequelize, Sequelize) => {
  const Coach = sequelize.define('coaches', {
    name: {
      type: Sequelize.STRING
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
    }
  });
  return Coach;
}
