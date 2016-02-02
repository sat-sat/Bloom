class AboutController {
  constructor($scope, Authentication) {
    $scope.authentication = Authentication;
  }
};

AboutController.$inject = ['$scope', 'Authentication'];
export default AboutController;