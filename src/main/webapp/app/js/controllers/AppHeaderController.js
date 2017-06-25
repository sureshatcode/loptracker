/**
 * App Header Controller JS File
 */

app.controller('AppHeaderController', [ '$log', '$location', '$rootScope', '$scope', 'StorageFactory',
		function($log, $location, $rootScope, $scope, Storage) {
	
	$log.debug("App header controller was initialized!");
	
	$scope.init = function() {
		$scope.user = Storage.getAll("user");
		if(null === $scope.user) {
			$rootScope.redirectToLogin();
		}
	};
	
	$scope.logout = function() {
		Storage.remove("user");
		$rootScope.redirectToLogin();
	};

	$scope.init();
} ]);