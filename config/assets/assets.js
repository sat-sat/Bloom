module.exports = {
  minify: false,
  client: {
    lib: {
      js: '',
      modernizr: '',
      sass: './node_modules/foundation-sites/scss',
    },
    css: './public/client/stylesheets/main.css',
    sass: [
      './public/modules/main.{scss,sass}',
      './public/modules/*/{scss,sass}/**/*.{scss,sass}',
    ],
    js: [
      './public/modules/main.js',
      './public/modules/core/app/init.js',
      './public/modules/*/**.js',
      './public/modules/*/**/*.js',
      '!./public/core/js/modernizr.js'
    ],
    // jsCore: './public/modules/application.js',
    jsCore: './public/modules/main.js', // use this when upgrading method
    views: [
      './public/modules/core/views/**/*.jade',
      './public/modules/*/views/**/*.jade'
      // './public/core/views/partials/**/*.jade',
      // './public/core/views/layout/layout.jade'
    ],
    images: ['public/modules/core/images/**/*.{png,jpg,gif,jpeg,ico}'],
  },
  server: {
    allJS: ['gulpfile.babel.js', 'server.js', 'config/**/*.js', 'app/**/*.js'] 
  }
}