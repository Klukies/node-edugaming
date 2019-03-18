module.exports = (sequelize, Sequelize) => {
  const Coach = sequelize.define('coaches', {
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
    img: {
      type: Sequelize.STRING
    }
  });
  return Coach;
}
