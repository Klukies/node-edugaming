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

exports.updateUsername = (req, res) => {
  Coach.update({ username: req.body.username }, {
    where: {
      coach_id: req.coach_id
    }
  }).then(() => {
    res.status(200).json({
      success: "Username successfully updated"
    })
  });
}

exports.updateGameId = (req, res) => {
  Coach.update({ game_id: req.body.game_id }, {
    where: {
      coach_id: req.coach_id
    }
  }).then(() => {
    res.status(200).json({
      success: "Game successfully updated"
    })
  });
}

exports.updatePrice = (req, res) => {
  Coach.update({ price: parseInt(req.body.price) }, {
    where: {
      coach_id: req.coach_id
    }
  }).then(() => {
    res.status(200).json({
      success: "Price successfully updated"
    })
  });
}

exports.updateSummary = (req, res) => {
  Coach.update({ summary: req.body.summary }, {
    where: {
      coach_id: req.coach_id
    }
  }).then(() => {
    res.status(200).json({
      success: "Summary successfully updated"
    })
  });
}

exports.updateDescription = (req, res) => {
  Coach.update({ description: req.body.description }, {
    where: {
      coach_id: req.coach_id
    }
  }).then(() => {
    res.status(200).json({
      success: "Description successfully updated"
    })
  });
}

exports.updateImage = (req, res) => {
  const base64Data = req.body.image;
  const img_url = '/images/' + Date.now() + '.webp';
  require("fs").writeFile("public" + img_url, base64Data, 'base64', function(err) {
    if (err) {
      console.log(err);
    } else {
      Coach.update({ img_url: img_url }, {
        where: {
          coach_id: req.coach_id
        }
      }).then(() => {
        res.status(200).json({
          success: "Image successfully updated",
          img_url
        })
      });
    }
  });
}
