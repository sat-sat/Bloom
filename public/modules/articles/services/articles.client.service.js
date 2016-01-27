class ArticlesService {
  constructor($resource) {
    return $resource('api/articles/:articleId', {
      articleId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    })
  }
}

ArticlesService.$inject = ['$resource']
export default ArticlesService