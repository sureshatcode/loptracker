/**
 * App Directives JS File
 */

app.filter('fullname', function() {
	return function(user) {
		if (null !== user) {
			return user.firstName + " " + user.lastName;
		}
	}
})