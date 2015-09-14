define([
  'angular',
  'angularRoute'
], function(angular) {

  angular
  .module('MusicApp.auth', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'partials/auth.html',
      controller: 'authCtrl'
    });
  }])
  .controller("authCtrl", ["$scope", "$firebaseAuth", "uidFactory", function($scope, $firebaseAuth, uidHandler) {
    var ref = new Firebase("https://flickering-fire-6777.firebaseio.com");

    // create an instance of the authentication service
    var auth = $firebaseAuth(ref);

    $scope.createUser = function(user) {
      ref.createUser({
        email    : $scope.user.email,
        password : $scope.user.password
      }, function(error, userData) {
        if (error) {
          console.log("Error creating user:", error);
        } else {
          console.log("Successfully created user account with uid:", userData.uid);
        }
      });

      $scope.email = $scope.user.email;
      $scope.password = $scope.user.password;
      console.log($scope.email, $scope.password);
    };

    $scope.loginUser = function(user) {
      ref.authWithPassword({
        email    : $scope.user.loginEmail,
        password : $scope.user.loginPassword
      }, function(error, authData) {
        if (error) {
          console.log("Login Failed!", error);
        } else {
          console.log("Authenticated successfully with payload:", authData);
          uidHandler.setUid(authData.uid);
          window.location = '#/songs';
        }
      });

      $scope.loginEmail = $scope.user.loginEmail;
      $scope.loginPassword = $scope.user.loginPassword;
      console.log($scope.loginEmail, $scope.loginPassword);
      
    };

    $scope.getAuth = function() {

    // login with Facebook
      auth.$authWithOAuthPopup("facebook").then(function(authData) {
        console.log("Logged in as:", authData.uid, authData);
        uidHandler.setUid(authData.uid);
        window.location = '#/songs';
      }).catch(function(error) {
        console.log("Authentication failed:", error);
      });
    };
  }]);
});


