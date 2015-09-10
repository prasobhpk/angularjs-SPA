(function (Service, undefined) {
    MCU.Modules.MCU.service("phasesService", ['$http', '$q', function ($http, $q) {
        var deferred = $q.defer();

        $http.get('/api/movies').then(function (data) {
            deferred.resolve(data);
        });
        this.getPhases = function () {
            return deferred.promise;
        };
    }]);
}(MCU.Service = MCU.Service || {}));