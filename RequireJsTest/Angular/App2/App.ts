define([
    "angular",
    
    "uiRouter",
    "App2/Config",
    
    // requirejs module dependencies:
    // - controllers
    // - services
], (
    angular: angular.IAngularStatic
    ,uiRouter,
    config
    
) => {

    var moduleName = "App2";

    angular.module(moduleName, [
        "common",
        
        "ui.router"
        
        // module dependencies
    ])

    // constants

    // config

    
    
    .config(config.Config)

    

    // controllers

    // services

    // directives

    ;

    return {
        name: moduleName
    }

}); 