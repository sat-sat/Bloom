'use strict';

import passport from 'passport';
import url from 'url';
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
import config from '../config';
import users from '../../app/controllers/users.server.controller';

export default function() { 

  passport.use(new GoogleStrategy({
    clientID: config.google.clientID,
    clientSecret: config.google.clientSecret,
    callbackURL: config.google.callbackURL,
    passReqToCallback: true
  },
    function(req, accessToken, refreshToken, profile, done) {

      var providerData = profile._json;
      providerData.accessToken = accessToken;
      providerData.refreshToken = refreshToken;

      var providerUserProfile = {
        firstName: profile.name.givenName,
        lastName: profile.name.familyName,
        fullName: profile.displayName,
        email: profile.emails[0].value,
        username: profile.username,
        provider: 'google',
        providerId: profile.id,
        providerData: providerData
      };

  
      users.saveOAuthUserProfile(req, providerUserProfile, done);
    }
  ));
};