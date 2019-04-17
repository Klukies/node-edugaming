const db = require('../config/db.config.js');
const config = require('../config/config.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Coach = db.coach;
const Game = db.game;
const Op = db.Sequelize.Op;

exports.signup = (req, res, next) => {
	// Save Coach to Database
  const rUsername = req.body.username;
  const rPassword = req.body.password;
  Coach.create({
		username: rUsername,
		email: req.body.email,
		password: bcrypt.hashSync(req.body.password, 8),
  })
  .then(coach => {
    Game.findOne({
      where: {
        id: 1
      }
    })
    .then(game => {
      coach.setGame(game).then(() => {
        next();
      });
    })
    .catch(err => {
      res.status(500).json({
        "error": err
      });
    });
  })
  .catch(err => {
    res.status(500).json({
      "error": err,
    });
  })
}

exports.login = (req, res) => {
  console.log("loggin in...");
  Coach.findOne({
    where: {
      username: req.body.username
    }
  })
  .then(coach => {
    if (!coach) {
      return res.status(404).json({
        "error": "Coach not found",
      });
    }

    if (!bcrypt.compareSync(req.body.password, coach.password)) {
			return res.status(401).json({
        "error": "Invalid Password!"
      });
		}

    let img_url = "/images/" + coach.img_url;

		const token = jwt.sign({ id: coach.id }, config.secret, {
		  expiresIn: 86400 // expires in 24 hours
    });
    res.status(200).json({
      "auth": true,
      "accessToken": token,
      coach,
    });
  })
  .catch(err => {
    res.status(500).json({
      "error with finding coach": err
    });
	});
}

//todo: get correct usercontent
exports.userContent = (req, res) => {
  Coach.findOne({
    where: {id: req.coach_id},
    attributes: ['name', 'username', 'email'],
    include: [{
      model: Game,
      attributes: ['id', 'title'],
      through: {
        attributes: ['coach_id', 'id'],
      }
    }]
  })
  .then(coach => {
    res.status(200).json({
      "description": "Coach Content Page",
      "coach": coach
    });
  })
  .catch(err => {
    res.status(500).json({
      "description": "Can not access Coach Page",
      "error": err
    });
  })
}
