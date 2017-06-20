/**
 * Authentication Service JS File
 */
app.service('AuthenticationService', [ '$log', 'AppFactory',
		function($log, AppFactory) {
	$log.debug("Authentication service was initialized!");

	var authenticationService = {};
	
	authenticationService.doRegisterNewUser = function(userObj, callback) {
		AppFactory.registerNewUser(userObj).success(function(response) {
			callback(response);
		}).error(function(response) {
			callback(response);
		});
	};
	
	authenticationService.doLoginRegisteredUser = function(userObj, callback) {
		AppFactory.loginRegisteredUser(userObj).success(function(response) {
			callback(response);
		}).error(function(response) {
			callback(response);
		});
	};
	
	return authenticationService;
} ]);