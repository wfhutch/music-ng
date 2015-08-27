
app.controller('SongDetailCtrl', function($scope, $routeParams, $q) {
    $scope.songId = $routeParams.songId;
    console.log($scope.songId);
    $scope.allSongsArray = [];
    $scope.song = {};

  function getSongListId() {
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

    getSongListId()
      .then(function(Data) {
        for (i=0; i<Data.length; i++) {
          $scope.allSongsArray.push(Data[i]);
        }
        return getMoreListId();
      })
      .then(function(moreSongs) {
        for (i=0; i<moreSongs.length; i++) {
          $scope.allSongsArray.push(moreSongs[i]);
        }
      })
      .then(function() {
        for (i=0; i<$scope.allSongsArray.length; i++) {
          if($scope.allSongsArray[i].id == $scope.songId) {
            $scope.song = $scope.allSongsArray[i];
          }
        }
      });
        // function(error) {
        //   console.log("error", error);
        // }

  function getMoreListId() {
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

    getMoreListId()
      .then(
        function(promiseResolutionData) {
          $scope.songs = promiseResolutionData;
        },
        function(error) {
          console.log("error", error);
        });
});


