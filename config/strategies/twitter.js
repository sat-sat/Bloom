'use strict';

import passport from 'passport';
import url from 'url';
const TwitterStrategy = require('passport-twitter').Strategy;
import config from '../config';
import users from '../../app/controllers/users.server.controller';

export default function() {
  
  passport.use(new TwitterStrategy({
    consumerKey: config.twitter.clientID,
    consumerSecret: config.twitter.clientSecret,
    callbackURL: config.twitter.callbackURL,
    passReqToCallback: true
  },
    function(req, token, tokenSecret, profile, done) {
  
      var providerData = profile._json;
      providerData.token = token;
      providerData.tokenSecret = tokenSecret;

      var providerUserProfile = {
        fullName: profile.displayName,
        username: profile.username,
        provider: 'twitter',
        providerId: profile.id,
        providerData: providerData
      };
      
      users.saveOAuthUserProfile(req, providerUserProfile, done);
    }
  ));
};