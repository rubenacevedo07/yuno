'use strict';

/**
 * @ngdoc function
 * @name bestudioApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the bestudioApp
 */
angular.module('bestudioApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
