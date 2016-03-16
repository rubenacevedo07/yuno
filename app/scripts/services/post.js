'use strict';

/**
 * @ngdoc service
 * @name bestudioApp.post
 * @description
 * # post
 * Service in the bestudioApp.
 */

angular.module('bestudioApp').factory 'Post', ($resource) ->
    // AngularJS will instantiate a singleton by calling "new" on this function
	return $resource('/api/posts/:id', { id: '@_id' }, {
		'query': method: 'GET', isArray: true
		'update': method : 'PUT'
})
