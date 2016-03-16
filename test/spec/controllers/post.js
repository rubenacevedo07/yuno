'use strict'

describe 'Controller: PostsCtrl', () ->
  // load the controller's module
	beforeEach module 'bestudioApp'
		PostsCtrl = {}
		scope = {}
		location = {}
			// Initialize the controller and a mock scope
			beforeEach inject ($controller, $rootScope, $location) ->
				scope = $rootScope.$new()
				location = $location
				PostsCtrl = $controller 'PostsCtrl', {
					$scope: scope
					$location: location
				}
	it 'should have name equal to "Posts" on the scope', () ->
		expect(scope.name).toBe('Posts')
	it 'should change the location to /posts/new', () ->
		location.path('/posts')
		scope.add()
		expect(location.path()).toEqual('/posts/new')
	it 'should change the location to /posts/view/:id', () ->
		location.path('/posts')
		scope.view(1)
		expect(location.path()).toEqual('/posts/view/1')