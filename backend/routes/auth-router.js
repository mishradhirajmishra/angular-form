var express = require('express');
var router = express.Router();
var User = require('../model/User');
var Duser = require('../model/duser')
var jwt = require('jsonwebtoken');
var key = require('../config/key');
const bcryptjs = require('bcryptjs');

/* GET users listing. */
router.post('/register', function (req, res, next) {

  const user = new User(req.body);
  
  bcryptjs.genSalt(10, (err, salt) => {
    bcryptjs.hash(user.password, salt, function (err, hash) {
      user.password = hash;
      user.save()
        .then((user) => {
          if (user) {
            res.status(200).json({ message: 'Registred successfully' })
          }
          else {
            res.status(201).json({ message: 'unable to register' })
          }
        }).catch(err => {
          res.json(err)
        })

    })
  });
});
router.post('/dregister', function (req, res, next) {

  const user = new Duser(req.body);
  
  bcryptjs.genSalt(10, (err, salt) => {
    bcryptjs.hash(user.password, salt, function (err, hash) {
      user.password = hash;
      user.save()
        .then((user) => {
          if (user) {
            res.status(200).json({ message: 'Registred successfully' })
          }
          else {
            res.status(201).json({ message: 'unable to register' })
          }
        }).catch(err => {
          res.json(err)
        })

    })
  });
});
/* GET users listing. */


module.exports = router;
