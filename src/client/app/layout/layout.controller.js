'use strict';

LayoutController.$inject = [];
function LayoutController() {
	var vm = this;

	vm.currentYear = new Date().getFullYear();

	activate();

	function activate() {
		console.log('Layout Controller Activated');
	}
}

module.exports = LayoutController;
