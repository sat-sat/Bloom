function route($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/example/example.client.view.html'
    })
    .otherwise({
      redirectTo: '/'
    });
};

route.$inject = ['$routeProvider'];
export default route;