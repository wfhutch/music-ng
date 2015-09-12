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




    // $scope.selectedSong = {};
    // $scope.songId = $routeParams.songId;
    // console.log("songId", $scope.songId);

    // $scope.songs.$loaded()
    //   .then(function() {
    //     $scope.selectedSong = $scope.songs.filter(function(song) {
    //     return song.id === parseInt($scope.songId);
    //     })[0];
    //     console.log($scope.selectedSong);
    //   })
    //   .catch(function(error) {
    //     console.log("error", error);
    //   });


