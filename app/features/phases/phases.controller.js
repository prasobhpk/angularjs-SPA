(function (Controllers, undefined) {
    MCU.Modules.MCU.controller("PhasesCtrl", ['$scope', 'MoviesResource',
        function ($scope, MoviesResource) {
            /*Movie.get(function(data){
             $scope.phases=data.MCU.Phases;
             console.log($scope.phases);
             });*/

            $scope.phases=MoviesResource.get().$promise.then(function (data) {
                $scope.phases = data.MCU.Phases;
                console.log($scope.phases);
            });

        }]);
}(MCU.Controllers = MCU.Controllers || {}));