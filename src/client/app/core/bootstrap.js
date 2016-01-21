'use strict';

/* IMAGES */
require.context('../../images/', true, /^\.\//);

/* HTML */
require('../../index.html');
require.context('../', true, /^\.\/.*\.html$/);

/* STYLES */
require('../../styles/app.scss');

var appModule = require('../app.module.js');

angular.element(document).ready(function() {
	angular.bootstrap(document, [appModule.name], {
		//strictDi: true
	});
});
