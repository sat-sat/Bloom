// routes

// controllers

// directives

// services
import Authentication from './services/authentication.client.service';

export default function (ApplicationConfiguration) {
  ApplicationConfiguration.registerModule('users', []);

  angular.module('users')
    .service('Authentication', Authentication)
};