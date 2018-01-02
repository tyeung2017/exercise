const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { GoogleClientID, GoogleClientSecret } = require('../key');

const app = express();

passport.use(new GoogleStrategy(
  {
    clientID: GoogleClientID,
    clientSecret: GoogleClientSecret,
    callbackURL: '/auth/google/callback',
  },
  (accessToken) => {
    console.log(accessToken);
  },
));

const PORT = process.env.PORT || 9001;

app.get('*', (req, res) => res.send('welcome back to express'));

app.listen(PORT, () => console.log('long time no Node'));
