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
    var ref = new Firebase("https://music-ng.firebaseio.com/songs");
    $scope.songs = $firebaseArray(ref);
  }]);

});