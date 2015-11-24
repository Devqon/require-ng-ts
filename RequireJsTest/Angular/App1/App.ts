// Kan dit relatief?
define([
    "App1/Controllers/TestController"
], (testCtrl) => {

    var moduleName = "App1";

    angular.module(moduleName, [
        "common",
        "ngSanitize",
        "ui.router",
        "ui.codemirror"
    ])
        .controller("testCtrl", testCtrl)

    ;

    return {
        name: moduleName
    }

});