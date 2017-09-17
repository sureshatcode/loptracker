/**
 * App Directives JS File
 */

app.filter('fullname', function() {
	return function(user) {
		if (null !== user) {
			return user.firstName + " " + user.lastName;
		}
	}
}).filter('currentyear', function() {
	return function() {
		return moment().year();
	}
}).directive('datepicker', function() {
	return {
		require : '?ngModel',
		restrict : 'A',
		link : function(scope, element, attrs, ngModel) {

			if (!ngModel)
				return;

			ngModel.$render = function() {
				element.val(ngModel.$viewValue || '');
			}

			element.on('dp.change', function() {
				scope.$apply(read);
			});

			read();

			function read() {
				var value = element.val();
				ngModel.$setViewValue(value);
			}
		}
	}
});