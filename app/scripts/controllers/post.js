'use strict';

/**
 * @ngdoc function
 * @name bestudioApp.controller:PostCtrl
 * @description
 * # PostCtrl
 * Controller of the bestudioApp
 */

angular.module('bestudioApp')
	.controller 'PostsCtrl',
		($scope, $location, Posts) -> $scope.name = 'Posts'
		$scope.posts = Posts.query()
		$scope.add = ()-> $location.path('/posts/new')
		$scope.view = (id)-> $location.path('/posts/view/' + id)  
