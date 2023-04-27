const express = require('express');
const passport = require('passport');
const router = express.Router();
const Account = require('../models/account');

router.get('/', (req, res) => {
  res.render('index', { title: 'kite App', user: req.user });
});

router.get('/register', (req, res) => {
  res.render('register', { title: 'kite App Registration' });
});

router.post('/register', (req, res) => {
  Account.findOne({ username: req.body.username }, (err, user) => {
    if (err) {
      return res.render('register', { title: 'Registration', message: 'Registration error', account: req.body.username })
    }
    if (user) {
      return res.render('register', { title: 'Registration', message: 'Existing User', account: req.body.username })
    }
    const newAccount = new Account({ username: req.body.username });
    Account.register(newAccount, req.body.password, (err, user) => {
      if (err) {
        return res.render('register', { title: 'Registration', message: 'access error', account: req.body.username })
      }
      if (!user) {
        return res.render('register', { title: 'Registration', message: 'access error', account: req.body.username })
      }
      console.log('Success, redirect');
      res.redirect('/');
    })
  })
});

router.get('/login', (req, res) => {
  res.render('login', { title: 'kite App Login', user: req.user });
});

router.post('/login', passport.authenticate('local'), (req, res) => {
  if(req.session.returnTo)
   res.redirect(req.session.returnTo);
  res.redirect('/');
});

router.get('/logout', (req, res, next) => { // use post or delete for better safety
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect('/');
  });
});

router.get('/ping', (req, res) => {
  res.status(200).send("pong!");
});

module.exports = router;