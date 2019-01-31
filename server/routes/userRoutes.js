var express = require('express');
const User = require('../models/user');
var userRouter = express.Router();

var db=require("../models");

module.exports = function(app) {

    app.post('/api/new', (req, res) => {
	console.log("Llego new user: ",req.body);
      User.create({
        username: req.body.username, email: req.body.email, password: req.body.password
      }).then(user => {
        req.session.user = user.dataValues;
        res.status(200).send({ regSucceess: true })
        }).catch(err => res.status(401).send({ regSucceess: false, errMsg: err }))
    });

    app.get('/api/logout', (req, res) => {
      res.clearCookie('user_sid');
      res.status(200).send({ inSession: false });
    });
    app.get('/api/user/alluserdata', (req, res, next) => {
 
      User.findAll({attributes: ['email', 'username']}).then( data => {
        res.status(200).json({ allUserData: data }) 
      }).catch(err => next(err));
    });
    app.post('/api/login', (req, res) => {
     
      var username = req.body.username;
      var password = req.body.password;
      User.findOne({ where: { username: username } }).then(user => {
        if (!user) {
          res.status(200).send({ incorrectUsername: true, inSession: false, msg: "Incorrect Username" })
        } else if (!user.validPassword(password)) {
          res.status(200).send({ incorrectPassword: true, inSession: false, msg: "Incorrect Password" })
        } else {
          res.status(200).send({
            inSession: true, msg: "Logged in!", loggedUserName: user.username
          })
        }
      })
    });
    

};

