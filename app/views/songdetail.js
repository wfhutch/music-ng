define([
  'angular',
  'angularRoute'
], function(angular) {

  angular
  .module('MusicApp.songDetail', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/songs/:songId', {
      templateUrl: 'partials/song-detail.html',
      controller: 'SongDetailCtrl'
    });
  }])
  .controller('SongDetailCtrl', ["$scope", "$firebaseObject", "$routeParams", function($scope, $firebaseObject, $routeParams) {

    var ref = new Firebase("https://flickering-fire-6777.firebaseio.com/songs");
    $scope.songs = $firebaseObject(ref);
    $scope.song = $firebaseObject(ref.child($routeParams.songId));
  }]);
});
