(function(){
	'use strict';

	angular.module('app').controller('BusinessCtrl', BusinessCtrl);
	
	BusinessCtrl.$inject = ['$rootScope', '$scope', '$http', '$mdDialog'];
	
	function BusinessCtrl($rootScope, $scope, $http, $mdDialog){
		$scope.showEcosystem = function(ev) {
			$mdDialog.show({
				controller: function DialogController($scope, $mdDialog) {
					$scope.cancel = function() {
						$mdDialog.cancel();
					};
				},
				templateUrl: '/view/ecosystem.html',
				parent: angular.element(document.body),
				targetEvent: ev,
				disableParentScroll: false,
				clickOutsideToClose: true
			})
			.then(function() {
			}, function() {
			});
		};
		
		var rellax = new Rellax('.rellax', {
			speed: 4,
			center: true,
			percentage: 0.5
		});
	}
})();