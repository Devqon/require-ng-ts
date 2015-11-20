/**
* @class Config
*/
export class Config {   

    /**
     *  Injects all the dependencies.
     *  @static
     *  @type {string[]}
     */
    static $inject: string[] = ['$stateProvider', '$urlRouterProvider'];

    /**
     *  Represents the config file.
     *  @constructor
     *  @class Config
     *  @param { angular.ui.IStateProvider } stateProvider
     *  @param { angular.ui.IUrlRouterProvider } urlRouterProvider
     */
    constructor(stateProvider: angular.ui.IStateProvider, urlRouterProvider: angular.ui.IUrlRouterProvider) {

        // default url
        urlRouterProvider.otherwise("");

        //stateProvider
        //    .state("state1", {
        //        url: "/state1",
        //        templateUrl: "Controllers/Templates/state1.html",
        //        controller: "State1Controller",
        //        controllerAs: "state1Ctrl"
        //    });

    }
} 