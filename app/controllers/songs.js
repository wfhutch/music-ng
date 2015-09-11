// app.controller("SongCtrl", 
//   ["$scope", 
//    "song-storage", 
//   function($scope, song_storage) {

//   $scope.songs = [];
//   $scope.songSearchText = {name: "", artist: "", album: ""};
//   $scope.newSong = {name: "", artist: "", album: ""};

//   song_storage.then(
//     function(promiseResolutionData) {
//       console.log("promiseResolutionData", promiseResolutionData);
//       $scope.songs = promiseResolutionData;
//     },
//     function(promiseRejectionError) {
//       console.log("error", promiseRejectionError);
//     });

//   }
// ]);








  // $scope.killSong = function(song) {
  //   var songIndex = $scope.songs.indexOf(song);
  //   if (songIndex >= 0) {
  //     $scope.songs.splice(songIndex, 1);
  //   }
  // };

  // $scope.addSong = function() {
  // $scope.allSongs.push({name: $scope.newSong.name, artist: $scope.newSong.artist, album: $scope.newSong.album});
  // $scope.newSong = "";
  // };