var app = angular.module("MusicApp", ['angular.filter', 'ngRoute']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/songs', {
        templateUrl: 'partials/songs-list.html',
        controller: 'SongsCtrl'
      }).
      when('/songs/:songId', {
        templateUrl: 'partials/song-detail.html',
        controller: 'SongDetailCtrl'
      }).
      otherwise({
        redirectTo: '/songs'
      });
  }]);