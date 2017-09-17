/**
 * App Factory JS File
 */
app.factory('AppFactory', [ '$log', '$location', '$http', function($log, $location, $http) {
	
	$log.info("App factory was initialized!");
	
	var appFactory = {};
	
	var baseUrl = $location.absUrl().split("/#")[0];
	
	$log.debug("App base url : " + baseUrl);
	
	var headers = {
		headers : {
			"Content-Type" : "application/json",
			"Accept" : "application/json"
		}
	};
	
	appFactory.registerNewUser = function(userObj) {
		return $http.post(baseUrl + '/core/authentication/signup', userObj, headers);
	};
	
	appFactory.loginRegisteredUser = function(userObj) {
		return $http.post(baseUrl + '/core/authentication/login', userObj, headers);
	};
	
	return appFactory;
} ]);