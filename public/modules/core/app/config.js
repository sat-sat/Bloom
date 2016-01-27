// import 'angular';
import 'angular-simple-logger';

export default (function () {
  const applicationModuleName = 'journalApp';

  const applicationModuleVendorDependencies = [
    require('angular-animate'),
    require('angular-resource'),
    require('angular-sanitize'),
    require('angular-ui-router'),
    require('angular-resource'),
    require('angular-route')
  ];

  var registerModule = function (moduleName, dependencies) {
    angular.module(moduleName, dependencies || [])
    angular.module(applicationModuleName).requires.push(moduleName)
  }

  return {
    applicationModuleName: applicationModuleName,
    applicationModuleVendorDependencies: applicationModuleVendorDependencies,
    registerModule: registerModule
  }
})()