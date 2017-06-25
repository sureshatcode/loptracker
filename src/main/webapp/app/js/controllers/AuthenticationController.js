/**
 * Authentication Controller JS File
 */

app.controller('LoginController', [ '$log', '$location', '$rootScope', '$scope', '$timeout', 'StorageFactory', 'AuthenticationService',
		function($log, $location, $rootScope, $scope, $timeout, Storage, AuthenticationService) {
	
	$log.debug("Login controller was initialized!");

	$scope.inputType = 'password';
	$scope.eyeClass = 'fa fa-eye-slash';
	
	$scope.hideShowPassword = function() {
		if ($scope.inputType == 'password') {
			$scope.inputType = 'text';
			$scope.eyeClass = 'fa fa-eye';
		} else {
			$scope.inputType = 'password';
			$scope.eyeClass = 'fa fa-eye-slash';
		}
	};
	
	$scope.hidePopup = function() {
		$scope.showErrorMsg = false;
		$scope.showSuccessMsg = false;
	};
	
	$scope.buildUserObj = function() {
		var userObj = {
			"emailAddress" : $scope.emailAddress.toLowerCase(),
			"password" : $scope.password
		};
		
		return userObj;
	};
	
	$scope.emptyAllFields = function() {
		$scope.emailAddress = "";
		$scope.password = "";
	};
	
	$scope.loginRegisteredUser = function() {
		var userObj = $scope.buildUserObj();
		AuthenticationService.doLoginRegisteredUser(userObj, function(response) {
			$log.debug(angular.toJson(response));
			if (response.code == "APP001") {
				//$scope.emptyAllFields();
				if ($scope.showErrorMsg) {
					$scope.showErrorMsg = false;
				}
				$scope.showSuccessMsg = true;
				Storage.setAll("user", response.data);
				$timeout(function() {
					$location.path('/dashboard');
				}, 2000);
			} else {
				if ($scope.showSuccessMsg) {
					$scope.showSuccessMsg = false;
				}
				$scope.showErrorMsg = true;
				$scope.errorMsg = response.message;
			}
		});
	};
	
	$scope.init = function() {
		$scope.user = Storage.getAll("user");
		if(null !== $scope.user) {
			$rootScope.redirectToDashboard();
		}
		
		$scope.showErrorMsg = false;
		$scope.showSuccessMsg = false;
	};
	
	$scope.init();
} ]);

app.controller('SignupController', [ '$log', '$location', '$rootScope', '$scope', 'StorageFactory', 'AuthenticationService',
		function($log, $location, $rootScope, $scope, Storage, AuthenticationService) {
		
	$log.debug("Signup controller was initialized!");
	
	$scope.inputType = 'password';
	$scope.eyeClass = 'fa fa-eye-slash';
	
	$scope.confInputType = 'password';
	$scope.confEyeClass = 'fa fa-eye-slash';
	
	$scope.hideShowPassword = function() {
		if ($scope.inputType == 'password') {
			$scope.inputType = 'text';
			$scope.eyeClass = 'fa fa-eye';
		} else {
			$scope.inputType = 'password';
			$scope.eyeClass = 'fa fa-eye-slash';
		}
	};
	
	$scope.hideShowConfPassword = function() {
		if ($scope.confInputType == 'password') {
			$scope.confInputType = 'text';
			$scope.confEyeClass = 'fa fa-eye';
		} else {
			$scope.confInputType = 'password';
			$scope.confEyeClass = 'fa fa-eye-slash';
		}
	};
	
	$scope.hidePopup = function() {
		$scope.showErrorMsg = false;
		$scope.showSuccessMsg = false;
	};
	
	$scope.buildUserObj = function() {
		var userObj = {
			"firstName" : $scope.firstName.toInitCap(),
			"lastName" : $scope.lastName.toInitCap(),
			"emailAddress" : $scope.emailAddress.toLowerCase(),
			"mobileNumber" : $scope.mobileNumber
		};
		
		return userObj;
	};
	
	$scope.emptyAllFields = function() {
		$scope.firstName = "";
		$scope.lastName = "";
		$scope.emailAddress = "";
		$scope.mobileNumber = "";
		$scope.password = "";
		$scope.confirmPassword = "";
	};
	
	$scope.registerNewUser = function() {
		if ($scope.password == $scope.confirmPassword) {
			var userObj = $scope.buildUserObj();
			userObj.password = $scope.password;
			AuthenticationService.doRegisterNewUser(userObj, function(response) {
				$log.debug(angular.toJson(response));
				if (response.code == "APP001") {
					$scope.emptyAllFields();
					$scope.signupSuccess = true;
					$scope.showSuccessMsg = true;
				} else {
					$scope.showErrorMsg = true;
					$scope.errorMsg = response.message;
				}
			});
		} else {
			$scope.showErrorMsg = true;
			$log.debug("Passwords are mismatch!");
		}
	};
	
	$scope.init = function() {
		$scope.user = Storage.getAll("user");
		if(null !== $scope.user) {
			$rootScope.redirectToDashboard();
		}
		
		$scope.showErrorMsg = false;
		$scope.showSuccessMsg = false;
		
		$scope.signupSuccess = false;
	};
	
	$scope.init();
} ]);