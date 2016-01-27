class ArticlesController {
  constructor($scope, $routeParams, $location, Authentication, ArticlesService) {
    $scope.authentication = Authentication;

    $scope.create = function() {
      var article = new ArticlesService({
        title: this.title,
        content: this.content
      });

      article.$save(function(response) {
        $location.path('articles/' + response._id);
      }, function(errorResponse) {
        $scope.error = errorResponse.data.message;
      });
    };

    $scope.find = function() {
      $scope.articles = ArticlesService.query();
    };

    $scope.findOne = function() {
      $scope.article = ArticlesService.get({
        articleId: $routeParams.articleId
      });
    };

    $scope.update = function() {
      $scope.article.$update(function() {
        $location.path('articles/' + $scope.article._id);
      }, function(errorResponse) {
        $scope.error = errorResponse.data.message;
      });
    };

    $scope.delete = function(article) {
      if (article) {
        article.$remove(function() {
          for (var i in $scope.articles) {
            if ($scope.articles[i] === article) {
              $scope.articles.splice(i, 1);
            }
          }
        });
      } else {
        $scope.article.$remove(function() {
          $location.path('articles');
        });
      }
    };
  }
};

ArticlesController.$inject = ['$scope', '$routeParams', '$location', 'Authentication', 'ArticlesService'];
export default ArticlesController;