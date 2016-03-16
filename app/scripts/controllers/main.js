'use strict';

/**
 * @ngdoc function
 * @name bestudioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bestudioApp
 */
angular.module('bestudioApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
