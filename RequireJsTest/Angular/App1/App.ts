﻿// dit zou ik wel relatief willen zien
define([
    "App1/Controllers/TestController"
], (testCtrl) => {

    var moduleName = "App1";

    angular.module(moduleName, [
        "common",
        "ui.router"
    ])
        .controller("testCtrl", testCtrl)

    ;

    return {
        name: moduleName
    }

});