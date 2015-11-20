define([
    "angular",
    "uiRouter",
    "App2/Config",
], function (angular, uiRouter, config) {
    var moduleName = "App2";
    angular.module(moduleName, [
        "common",
        "ui.router"
    ])
        .config(config.Config);
    return {
        name: moduleName
    };
});
