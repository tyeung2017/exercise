const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();

passport.use(new GoogleStrategy());

const PORT = process.env.PORT || 9001;

app.get('*', (req, res) => res.send('welcome back to express'));

app.listen(PORT, () => console.log('long time no Node'));
