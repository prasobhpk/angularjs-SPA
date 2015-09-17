(function (Service, undefined) {
    MCU.Modules.MCU.factory("MoviesResource", ['$resource', function ($resource) {
        return $resource('api/movies', {}, {});
    }]);
}(MCU.Service = MCU.Service || {}));