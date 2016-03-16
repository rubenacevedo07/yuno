'use strict';

/**
 * @ngdoc filter
 * @name bestudioApp.filter:markdown
 * @function
 * @description
 * # markdown
 * Filter in the bestudioApp.
 */
angular.module('bestudioApp')
  .filter('markdown', function () {
    return function (input) {
      return 'markdown filter: ' + input;
    };
  });
