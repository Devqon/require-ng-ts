// Kan dit relatief?
define([
    "App1/Controllers/TestController"
], function (testCtrl) {
    var moduleName = "App1";
    angular.module(moduleName, [
        "common",
        "ui.router"
    ])
        .controller("testCtrl", testCtrl);
    return {
        name: moduleName
    };
});
//# sourceMappingURL=App.js.map