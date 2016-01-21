'use strict';

appRoutes.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
function appRoutes($stateProvider, $locationProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');

	$stateProvider.state('home', {
		url: '/',
		template: require('./home/templates/home.html')
	}).state('about', {
		url: '/about',
		template: require('./static/about.html')
	});
}

module.exports = appRoutes;
