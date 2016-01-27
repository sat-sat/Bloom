'use strict';

export default function(app) {
	
  let index = require('../controllers/index.server.controller');

  app.get('/', index.render);
};