define([
  'angular',
  'angularRoute'
], function(angular) {

  angular
  .module('MusicApp.songList', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'partials/songs-list.html',
      controller: 'SongListCtrl'
    });
  }])
  .controller('SongListCtrl', ["$scope", "$firebaseArray", function($scope, $firebaseArray) {
    var ref = new Firebase("https://flickering-fire-6777.firebaseio.com/songs");
    $scope.songs = $firebaseArray(ref);

    $scope.addSong =function() {
      $scope.songs.$add({
        name: $scope.newSong.name,
        album: $scope.newSong.album,
        artist: $scope.newSong.artist
      });
      $scope.newSong.name = "";
      $scope.newSong.album = "";
      $scope.newSong.artist = "";
    };

    $scope.deleteSong = function(song) {
      $scope.songs.$remove(song);
    };
  }]);
});