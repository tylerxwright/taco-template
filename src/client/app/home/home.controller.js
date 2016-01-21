'use strict';

HomeController.$inject = [];
function HomeController() {
	var vm = this;

	activate();

	function activate() {
		console.log('Home Controller Activated');
	}
}

module.exports = HomeController;
