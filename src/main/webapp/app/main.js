/**
 * Main JS File
 */

var app = angular.module('LopTrackerApp', [ 'ngRoute', 'ngMessages' ]);

app.config([ '$routeProvider', function($routeProvider) {

	$routeProvider.when('/login', {
		controller : 'LoginController',
		templateUrl : 'app/views/login.html'
	}).when('/signup', {
		controller : 'SignupController',
		templateUrl : 'app/views/signup.html'
	}).when('/dashboard', {
		controller : 'DashboardController',
		templateUrl : 'app/views/dashboard.html'
	}).otherwise({
		redirectTo : '/login'
	})

} ]);

app.run([ '$log', '$location', '$rootScope', function($log, $location, $rootScope) {
	
	$log.info("App started running!");
	
	$("body").tooltip({ selector: '[data-toggle=tooltip]' });
	
	$rootScope.EMAIL_REGEXP = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,10}|[0-9]{1,3})(\]?)$/;
	$rootScope.MOBILE_REGEXP = /^(0|[1-9][0-9]*)$/;
	
	String.prototype.toInitCap = function () {
		return this.toLowerCase().replace(/(?:^|\s)[a-z]/g, function (m) {
			return m.toUpperCase();
		});
	};
	
	$rootScope.redirectToDashboard = function() {
		$location.path('/dashboard');
	};
	
	$rootScope.redirectToLogin = function() {
		$location.path('/login');
	};
} ]);