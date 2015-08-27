app.factory("song-storage", function($q, $http) {

  function getSongList() {

    // Return a promise for our async XHR
    return $q(function(resolve, reject) {

      // Perform some asynchronous operation, resolve or reject 
      // the promise when appropriate.
      $http.get('./data/songs1.json')
      .success(
        function(objectFromJSONFile) {
          console.log(objectFromJSONFile);
          resolve(objectFromJSONFile.songs);
        },function(error) {
          reject(error);
        }
      );

    });
  }

  return getSongList();
});