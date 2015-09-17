(function (Controllers, undefined) {
    MCU.Modules.MCU.controller("upcomingfilmsController", ['$scope', 'MoviesResource',
        function ($scope, MoviesResource) {
            var promise = MoviesResource.get().$promise;
            promise.then(function (data) {
                var allMovies = [];
                var pastMovies = [];
                var allPhasesMovies = [];
                var phasesLength = data.MCU.Phases.length;

                //get todays date
                var todaysDate = new Date();

                //merge our arrays
                for (var i = 0; i < phasesLength; i++) {
                    var phasesMovies = data.MCU.Phases[i].movies;
                    for (var j = 0; j < phasesMovies.length; j++) {
                        var movieDate = new Date(data.MCU.Phases[i].movies[j].date);
                        //upcoming films
                        if (movieDate > todaysDate) {
                            allMovies.push(data.MCU.Phases[i].movies[j]);
                        }

                        //past films
                        if (movieDate < todaysDate) {
                            pastMovies.push(data.MCU.Phases[i].movies[j]);
                        }

                        //entire list
                        allPhasesMovies.push(data.MCU.Phases[i].movies[j]);

                    }
                }
                $scope.films = allMovies;
                $scope.pastFilms = pastMovies;
                $scope.$parent.allFilms = allPhasesMovies;
            });
        }]);
}(MCU.Controllers = MCU.Controllers || {}));