/**
 * Dashboard Controller JS File
 */

app.controller('DashboardController', [ '$log', '$location', '$rootScope', '$scope', 'StorageFactory',
		function($log, $location, $rootScope, $scope, Storage) {
	
	$log.debug("Dashboard controller was initialized!");
	
	$scope.init = function() {
		$scope.user = Storage.get("user");
		if(null !== $scope.user) {
			$location.path('/dashboard');
		}
	};
	
	$scope.logout = function() {
		Storage.remove("user");
		$location.path('/login');
	};

	$scope.init();
} ]);