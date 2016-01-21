'use strict';

var dependencies = [
	/* 3rd party */
	'ngCookies',
	'ngResource',
	'ngSanitize',
	'ngAnimate',
	'ui.router',
	'ui.bootstrap',
	/* modules */
	require('./layout/layout.module.js').name,
	require('./home/home.module.js').name,
];

module.exports = angular.module('app', dependencies)
	.config(require('./app.routes.js'));
