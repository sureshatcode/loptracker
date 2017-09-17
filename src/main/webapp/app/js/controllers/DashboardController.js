/**
 * Dashboard Controller JS File
 */

app.controller('DashboardController', [ '$log', '$location', '$rootScope', '$scope', '$timeout', 'StorageFactory',
		function($log, $location, $rootScope, $scope, $timeout, Storage) {
	
	$log.info("Dashboard controller was initialized!");
	
	$scope.saveALeave = function() {
		var data = {
			"leaveDate": $scope.pickedLeaveDate,
			"reasonForLeave": $scope.reasonForLeave
		}
		console.log('function calling');
		$log.debug(data);
	};
	
	
	
	$scope.init = function() {
		$scope.user = Storage.getAll("user");
		if(null === $scope.user) {
			$rootScope.redirectToLogin();
		}
		
		$timeout(function() {
			$('#leaveDate').datepicker({
			    format: "dd-M-yyyy",
			    autoclose: true,
			    todayHighlight: true,
                templates: {
                    leftArrow: '&laquo;',
                    rightArrow: '&raquo;'
                }
			});
								
			$("#leaveDate").on("change", function() {
				$scope.pickedLeaveDate = $("#leaveDate").val();
			});
		}, 3000);
	};

	$scope.init();
} ]);