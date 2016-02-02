export default function (ApplicationConfiguration) {
  angular
    .module(ApplicationConfiguration.applicationModuleName,
        ApplicationConfiguration.applicationModuleVendorDependencies);

  angular.module(ApplicationConfiguration.applicationModuleName)
    .config(($locationProvider, $uiViewScrollProvider) => {
      $uiViewScrollProvider.useAnchorScroll()
      // $locationProvider
      // .html5Mode({
      //   enabled: true,
      //   requireBase: false
      // });
    })
    .run(['$location', '$rootElement', function ($location, $rootElement) {
      $rootElement.off('click')
    }]);

  angular.element(document).ready(() => {
    if (window.location.hash === '#_=_') window.location.hash = '!';
    angular.bootstrap(document, [ApplicationConfiguration.applicationModuleName])
  })

}