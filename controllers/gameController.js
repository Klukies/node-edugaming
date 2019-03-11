const db = require('../config/db.config.js');
const config = require('../config/config.js');
const Game = db.game;

exports.index = (req, res) => {
  Game.findAll()
  .then(games => {
    res.json(games);
  })
  .catch(err => {
    res.status(404).send("games not found");
  });
}
