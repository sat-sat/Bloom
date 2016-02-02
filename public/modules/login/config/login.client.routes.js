function route($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/login/login.client.view.html'
    })
    .otherwise({
      redirectTo: '/'
    });
};

route.$inject = ['$routeProvider'];
export default route;