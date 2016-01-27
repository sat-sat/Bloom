module.exports = {
  'jquery': {
    'exports': 'jQuery'
  },
  'angular': {
    'exports': 'angular',
    'depends': {
      'jquery': '$'
    }
  }
}