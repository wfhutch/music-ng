({
  baseUrl: './app/',
  paths: {
    'angular': '../lib/bower_components/angular/angular.min',
    'firebase': '../lib/bower_components/firebase/firebase',
    'angularfire': '../lib/bower_components/angularfire/dist/angularfire.min',
    'angularRoute': '../lib/bower_components/angular-route/angular-route',
    'angularFilter': '../lib/bower_components/angular-filter/dist/angular-filter.min',
    'jquery': '../lib/bower_components/jquery/dist/jquery.min',
    'bootstrap': '../lib/bower_components/bootstrap/dist/js/bootstrap.min',
    'q': '../lib/bower_components/q/q',
    'es6': "../lib/bower_components/requirejs-babel/es6",
    'babel':'../lib/bower_components/requirejs-babel/babel-5.8.22.min'
  },
  shim: {
    'angular' : {'exports' : 'angular'},
    'angularRoute': ['angular'],
    'angularfire': ['angular', 'firebase'],
    'angularFilter': ['angular'],
    'angularMocks': {
      deps:['angular'],
      'exports':'angular.mock'
    },
    'bootstrap': ['jquery'],
    'firebase': {
      exports:'Firebase'
    }

  },
    name: "app",
    out: "main-built.js"

});


