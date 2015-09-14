define([
  'angular',
  'angularRoute',
  'angularfire',
  'angularFilter',
  'views/songlist',
  'views/songdetail',
  'auth',
  'factories/uidHandler',
], function(angular, angularRoute, angularfire, filter, songs, songdetail, auth, uidHandler) {

  return angular.module("MusicApp", [
      'angular.filter',
      'ngRoute',
      'firebase',
      'MusicApp.songList',
      'MusicApp.songDetail',
      'MusicApp.auth',
      'MusicApp.getSetUid',
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

