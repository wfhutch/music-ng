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
  .controller('SongDetailCtrl', ["$scope", "$firebaseArray", "$routeParams", function($scope, $firebaseArray, $routeParams) {

    $scope.selectedSong = {};
    $scope.songId = $routeParams.songId;
    console.log("songId", $scope.songId);

    var ref = new Firebase("https://music-ng.firebaseio.com/songs");
    $scope.songs = $firebaseArray(ref);

    $scope.songs.$loaded()
      .then(function() {
        $scope.selectedSong = $scope.songs.filter(function(song) {
        return song.id === parseInt($scope.songId);
        })[0];
        console.log($scope.selectedSong);
      })
      .catch(function(error) {
        console.log("error", error);
      });

    }]);
});

