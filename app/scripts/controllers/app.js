'use strict';

/**
 * @ngdoc function
 * @name bestudioApp.controller:AppCtrl
 * @description
 * # AppCtrl
 * Controller of the bestudioApp
 */
angular.module('bestudioApp')
  .controller('AppCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
