(function (MCU, undefined) {
    /**
     * @ngdoc function
     * @name MCU
     * @id MCU
     * @description
     *
     * Set up our MCU website parameters for AngularJS.
     **/
    MCU.Version = "0.0.0";
    MCU.PartialsPath = "partials/";
    MCU.Service = {};
    MCU.Modules = {};
    MCU.Configs = {};
    MCU.Filters = {};
    MCU.Controllers = {};
    MCU.Directives = {};
    MCU.StorePath = "https://pk-movies.firebaseio.com/MCU";


}(window.MCU = window.MCU || {}));

(function (Modules, undefined)
{
    /**
     * @ngdoc object
     * @id MCU
     * @name MCU
     * @description
     *
     * This Module initializes the MCU Angular module.
     **/
    Modules.MCU = angular.module("mcu", ['ngRoute','firebase']);

}(MCU.Modules = MCU.Modules || {} ));