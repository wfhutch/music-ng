// define([
//   'angular',
//   'angularRoute'
// ], function(angular) {

//   angular
//   .module('MusicApp.auth', ['ngRoute'])
//   .config(['$routeProvider', function($routeProvider) {
//     $routeProvider.when('/', {
//       templateUrl: 'partials/auth.html',
//       controller: 'authCtrl'
//     });
//   }])
//   .controller("authCtrl", function($scope, $firebaseAuth) {
//     var ref = new Firebase("https://flickering-fire-6777.firebaseio.com");

//     // create an instance of the authentication service
//     var auth = $firebaseAuth(ref);

//     // login with Facebook
//     auth.$authWithOAuthPopup("facebook").then(function(authData) {
//       console.log("Logged in as:", authData.uid);
//     }).catch(function(error) {
//       console.log("Authentication failed:", error);
//     });
//   });