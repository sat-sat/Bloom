// routes
// import CoreRoutes from './config/core.client.routes';

// controllers
// import HomeCtrl from './controllers/core.client.controller';
// import AboutCtrl from './controllers/about.client.controller';
// import ExampleCtrl from './controllers/example.client.controller';

// directives

export default function (ApplicationConfiguration) {
  ApplicationConfiguration.registerModule('core', []);

  angular.module('core')
    // .config(CoreRoutes)
    // .controller('HomeCtrl', HomeCtrl)
    // .controller('AboutCtrl', AboutCtrl)
    // .controller('ExampleCtrl', ExampleCtrl)
};