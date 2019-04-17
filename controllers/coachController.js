const db = require('../config/db.config.js');
const config = require('../config/config.js');
const jwt = require('jsonwebtoken');
const Coach = db.coach;

exports.coachContent = (req, res) => {
  Coach.findOne({
    where: {coach_id: req.coach_id},
    attributes: ['username', 'email', 'summary', 'description', 'img_url', 'price', 'game_id'],
  }).then(coach => {
    res.status(200).json({coach});
  }).catch(err => {
    res.status(500).json({"error": err});
  })
}
