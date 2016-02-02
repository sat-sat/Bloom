// routes
import LoginRoute from './config/login.client.routes';

// controllers
import LoginController from './controllers/login.client.controller';

// directives

// services
import Authentication from '../users/services/authentication.client.service';

export default function (ApplicationConfiguration) {
  ApplicationConfiguration.registerModule('login', []);

  angular.module('login')
    .config(LoginRoute)
    .controller('LoginController', LoginController)
};