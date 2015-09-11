
// define([
//   'angular',
//   'angularRoute',
// ], function(angular) {
//   angular.module('MusicApp.SongDetailCtrl', ['ngRoute'])
//   .config(['$routeProvider', function($routeProvider) {
//     $routeProvider.when('/songs/:songId', {
//       templateUrl: 'partials/songs-detail.html',
//       controller: 'SongDetailCtrl'
//     });
//   }])
//   .controller('SongDetailCtrl', ['$scope', '$routeParams', '$firebaseArray', '$loaded',
//     function($scope, $routeParams, $firebaseArray, $loaded) {

//     $scope.selectedSong = {};
//     $scope.songId = $routeParams.songId;
//     console.log("songId", $scope.songId);

//     var ref = new Firebase("https://music-ng.firebaseio.com/songs");
//     $scope.songs = $firebaseArray(ref);

//     $scope.songs.$loaded()
//       .then(function() {
//         $scope.selectedSong = $scope.songs.filter(function(song) {
//         return song.id === parseInt($scope.songId);
//         })[0];
//         console.log($scope.selectedSong);
//       })
//       .catch(function(error) {
//         console.log("error", error);
//       });
//   }]);
// });




// // app.controller("SongDetailCtrl", 
// //   ["$scope", 
// //   "$routeParams",
// //   "$firebaseArray", 
  
// //   function($scope, $routeParams, $firebaseArray, $loaded) {


// //   }
// // ]);
//   