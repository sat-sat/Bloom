'use strict';

exports.isLoggedIn = function(req, res, next) {
  if (req.user) {
    res.render('index.server.view.ejs', {
      title: 'Hello World',
      userFullName: req.user ? req.user.fullName : '',
      user: JSON.stringify(req.user)
    });
  } else {
    return res.redirect('/signin');
  }    
};