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
    name: req.body.name,
		username: rUsername,
		email: req.body.email,
		password: bcrypt.hashSync(req.body.password, 8),
  }).then(coach => {
    Game.findOne({
      where: {
        id: 1
      }
    })
    .then(game => {
      coach.setGame(game).then(() => {
        loginFromRegister(rUsername, rPassword, res);
      });
    })
    .catch(err => {
      res.status(500).send("Error -> " + err);
    });
  })
  .catch(err => {
    res.status(500).send("Fail! Error -> " + err);
  })
}

const loginFromRegister = (username, password, res) => {
  Coach.findOne({
    where: {
      username: username
    }
  })
  .then(coach => {
    if (!coach) {
      return res.status(404).send('Coach Not Found.');
    }

    if (!bcrypt.compareSync(password, coach.password)) {
			return res.status(401).send({ auth: false, accessToken: null, reason: "Invalid Password!" });
		}

		const token = jwt.sign({ id: coach.id }, config.secret, {
		  expiresIn: 86400 // expires in 24 hours
    });
    res.status(200).send({ auth: true, accessToken: token });
  })
  .catch(err => {
    res.status(500).send('Error with login -> ' + err);
	});
}

exports.login = (req, res) => {
  Coach.findOne({
    where: {
      username: req.body.username
    }
  })
  .then(coach => {
    if (!coach) {
      return res.status(404).send('Coach Not Found.');
    }

    if (!bcrypt.compareSync(req.body.password, coach.password)) {
			return res.status(401).send({ auth: false, accessToken: null, reason: "Invalid Password!" });
		}

		const token = jwt.sign({ id: coach.id }, config.secret, {
		  expiresIn: 86400 // expires in 24 hours
    });
    res.status(200).send({ auth: true, accessToken: token });
  })
  .catch(err => {
    res.status(500).send('Error with login -> ' + err);
	});
}

exports.userContent = (req, res) => {
  Coach.findOne({
    where: {id: req.coachId},
    attributes: ['name', 'username', 'email'],
    include: [{
      model: Game,
      attributes: ['id', 'title'],
      through: {
        attributes: ['coachId', 'id'],
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
