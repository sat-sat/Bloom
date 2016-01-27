'use strict';

import passport from 'passport';
import mongoose from 'mongoose';

export default function() {
  
  const User = mongoose.model('User');
  
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findOne({
      _id: id
    }, '-password -salt', function(err, user) {
      done(err, user);
    });
  });

  require('./strategies/local.js')();
  require('./strategies/twitter.js')();
  require('./strategies/facebook.js')();
  require('./strategies/google.js')();
};