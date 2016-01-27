function route($stateProvider, $urlRouterProvider) {
  'ngInject';
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      // template: '<h1>hello from core.client.routes</h1>',
      templateUrl: '/views/partials/home.client.view.html',
      controller: 'HomeCtrl as home'
    })

    .state('about', {
      url: '/about',
      templateUrl: '/views/partials/about.client.view.html',
      // controller: 'AboutCtrl as about'
    })
}

export default route