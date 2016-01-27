'use strict';

import users from '../../app/controllers/users.server.controller';
import articles from '../../app/controllers/articles.server.controller';

export default function(app) {
	
  app.route('/api/articles')
	   .get(articles.list)
	   .post(users.requiresLogin, articles.create);
	
  app.route('/api/articles/:articleId')
	   .get(articles.read)
	   .put(users.requiresLogin, articles.hasAuthorization, articles.update)
	   .delete(users.requiresLogin, articles.hasAuthorization, articles.delete);

  app.param('articleId', articles.articleByID);
};