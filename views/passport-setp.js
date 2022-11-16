const passport = require('passport')  
const GoogltStrategy = require('passport-google-oauth2').Strategy 
passport.use(new GoogltStrategy({
    clientID:,
    clientSecret:,
    callbackURL:,

})) //