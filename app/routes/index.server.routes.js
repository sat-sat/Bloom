'use strict';

import user from '../controllers/index.server.controller'

export default function(app) {
  app.get('/', user.isLoggedIn);
};