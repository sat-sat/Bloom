'use strict';

import config from './config';
import mongoose from 'mongoose';

export default function() {

  const db = mongoose.connect(config.db);

  require('../app/models/user.server.model');
  require('../app/models/article.server.model');

  return db;
};