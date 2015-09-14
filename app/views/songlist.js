define([
  'angular',
  'angularRoute'
], function(angular) {

  angular
  .module('MusicApp.songList', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/songs', {
      templateUrl: 'partials/songs-list.html',
      controller: 'SongListCtrl'
    });
  }])
  .controller('SongListCtrl', ["$scope", "$firebaseArray", "uidFactory", function($scope, $firebaseArray, uidHandler) {
    var ref = new Firebase("https://flickering-fire-6777.firebaseio.com/songs");
    $scope.songs = $firebaseArray(ref);

    // create array that only contains songs with uid of whoever is currently logged in
    $scope.newSongs = [];

    $scope.songUid = uidHandler.getUid();
    console.log("newSongs ID", $scope.songUid);

    // show only the songs for the user currently logged in
    $scope.songs.$loaded()
      .then(function() {
        for (i = 0; i < $scope.songs.length; i++) {
          if ($scope.songs[i].uid == $scope.songUid) {
            $scope.newSongs.push($scope.songs[i]);
            }
          }
        })
        .catch(function(error) {
          console.log("error", error);
        });

    $scope.addSong =function() {
      $scope.songs.$add({
        name: $scope.newSong.name,
        album: $scope.newSong.album,
        artist: $scope.newSong.artist,
        uid: uidHandler.getUid()
      });
      $scope.newSong.name = "";
      $scope.newSong.album = "";
      $scope.newSong.artist = "";
    };

    $scope.deleteSong = function(song) {
      console.log("button clicked");
      $scope.songs.$remove(song);
    };
  }]);

});