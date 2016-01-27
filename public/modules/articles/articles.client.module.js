// routes
import ArticlesRoutes from './config/articles.client.routes';

// controllers
import ArticlesController from './controllers/articles.client.controller';

// directives

// services
import ArticlesService from './services/articles.client.service';

export default function (ApplicationConfiguration) {
  ApplicationConfiguration.registerModule('articles', []);

  angular.module('articles')
    .config(ArticlesRoutes)
    .service('ArticlesService', ArticlesService)
    .controller('ArticlesController', ArticlesController)
};