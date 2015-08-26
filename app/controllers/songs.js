app.controller("SongsCtrl", function($scope, $q) {


  $scope.newSong = {
    name: "",
    artist: "",
    album: ""
  };

  $scope.allSongs = [];

  $scope.killSong = function(song) {
    var songIndex = $scope.songs.indexOf(song);
    if (songIndex >= 0) {
      $scope.songs.splice(songIndex, 1);
    }
  };

  $scope.addSong = function() {
  $scope.allSongs.push({name: $scope.newSong.name, artist: $scope.newSong.artist, album: $scope.newSong.album});
  $scope.newSong = "";
  };

  function getSongList() {
    // perform some asynchronous operation, resolve or reject the promise when appropriate.
    return $q(function(resolve, reject) {

      $.ajax({
        url: "./data/songs1.json"
      })
      .done(function(response) {
        resolve(response.songs);
      })
      .fail(function(xhr, status, error) {
        reject(error);
      });

      });
    }

    getSongList()
      .then(function(Data) {
        console.log(Data);
        for (i=0; i<Data.length; i++) {
          $scope.allSongs.push(Data[i]);
        }
        console.log($scope.allSongs);
        return getMoreList();
      })
      .then(function(moreSongs) {
        console.log(moreSongs);
          for (i=0; i<moreSongs.length; i++) {
          $scope.allSongs.push(moreSongs[i]);
        }
          console.log($scope.allSongs);
      });
        // function(error) {
        //   console.log("error", error);
        // }

  function getMoreList() {
    // perform some asynchronous operation, resolve or reject the promise when appropriate.
    return $q(function(resolve, reject) {

      $.ajax({
        url: "./data/songs2.json"
      })
      .done(function(response) {
        resolve(response.songs);
      })
      .fail(function(xhr, status, error) {
        reject(error);
      });

      });
    }

    getMoreList()
      .then(
        function(promiseResolutionData) {
          $scope.songs = promiseResolutionData;
        },
        function(error) {
          console.log("error", error);
        });

});


