// routes
import ExampleRoute from './config/example.client.routes';

// controllers
import ExampleController from './controllers/example.client.controller';

// directives

// services
import Authentication from '../users/services/authentication.client.service';

export default function (ApplicationConfiguration) {
  ApplicationConfiguration.registerModule('example', []);

  angular.module('example')
    .config(ExampleRoute)
    .controller('ExampleController', ExampleController)
};