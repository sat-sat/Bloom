function route($routeProvider, $locationProvider) {
  $routeProvider
    .when('/articles', {
      templateUrl: 'views/articles/list-articles.client.view.html',
      controller: 'ArticlesController'
    })
    .when('/articles/create', {
      templateUrl: 'views/articles/create-article.client.view.html',
      controller: 'ArticlesController'
    })
    .when('/articles/:articleId', {
      templateUrl: 'views/articles/view-article.client.view.html',
      controller: 'ArticlesController'
    })
    .when('/articles/:articleId/edit', {
      templateUrl: 'views/articles/edit-article.client.view.html',
      controller: 'ArticlesController'
    });
};

route.$inject = ['$routeProvider', '$locationProvider']
export default route