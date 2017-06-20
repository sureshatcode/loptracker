/**
 * Stroage Factory JS File
 */
app.factory('StorageFactory', [ '$log', '$location', '$http', function($log, $location, $http) {
	$log.debug("Stroage factory was initialized!");
	
	var storageFactory = {};
	
    var storageType = localStorage;

    storageFactory.set = function(key, value) {
        storageType.setItem(key, value);
    };

    storageFactory.setAll = function(key, value) {
        storageType.setItem(key, angular.toJson(value));
    };

    storageFactory.get = function(key) {
        return storageType.getItem(key);
    };

    storageFactory.getAll = function(key) {
        return angular.fromJson(storageType.getItem(key));
    };

    storageFactory.remove = function(key) {
        storageType.removeItem(key);
    };

    storageFactory.removeAll = function() {
        storageType.clear();
    };
	
	return storageFactory;
} ]);