define([
  'angular',
  'angularRoute',
  'angularfire',
  'angularFilter',
  'views/songlist',
  'views/songdetail'
], function(angular, angularRoute, angularfire, filter, songs, songdetail) {

  return angular.module("MusicApp", [
      'angular.filter',
      'ngRoute',
      'firebase',
      'MusicApp.songList',
      'MusicApp.songDetail'
    ]).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/'});
      }]);
    });


//       when('/', {
//         templateUrl: 'partials/songs-list.html',
//         controller: 'SongCtrl'
//       }).
//       when('/songs/:songId', {
//         templateUrl: 'partials/song-detail.html',
//         controller: 'SongDetailCtrl',
//         controllerAs: ''
//       }).

