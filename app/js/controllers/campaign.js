'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function CanpaignCtrl() {

  // ViewModel
  var vm = this;

  vm.title = 'Campaign';
  // vm.number = 1234;

}

controllersModule.controller('CanpaignCtrl', CanpaignCtrl);