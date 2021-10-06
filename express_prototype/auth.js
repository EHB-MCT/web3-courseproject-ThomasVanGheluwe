const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;


//TODO: protect with environment variables
const GOOGLE_CLIENT_ID = "784313970046-ra7rt9nhm17uam0kufc8ac1mt0l0jeo3.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
      return cb(null, profile);
  }
));


passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});