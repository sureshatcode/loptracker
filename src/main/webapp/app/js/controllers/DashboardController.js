/**
 * Dashboard Controller JS File
 */

app.controller('DashboardController', [ '$log', '$location', '$rootScope', '$scope', 'StorageFactory',
		function($log, $location, $rootScope, $scope, Storage) {
	
	$log.debug("Dashboard controller was initialized!");
	
	$scope.init = function() {
		$scope.user = Storage.getAll("user");
		if(null === $scope.user) {
			$rootScope.redirectToLogin();
		}
	};

	$scope.init();
} ]);