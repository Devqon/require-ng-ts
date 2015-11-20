/// <reference path="../scripts/typings/tsd.d.ts" />
/*
    ???
    the config passed in here I want to be available everywhere
*/
requirejs.config({
    paths: {
        "config": "Main.Config"
    }
});
require(["config"], function (config) {
    requirejs.config({
        paths: {
            "angular": config.libsPath + "angular/angular",
            "common": "Common/Common",
        },
        shim: {
            "angular": {
                exports: "angular"
            }
        }
    });
    require(["angular"], function (angular) {
        var wrapper = document.getElementById(config.angularWrapperId);
        var $app = angular.element(wrapper);
        var directory = $app.data("directory");
        var appName = $app.data("app-name");
        requirejs.config({
            paths: {
                appMain: directory + "/" + config.appMainFile,
            }
        });
        require([
            "common",
            "appMain"
        ], function (common, app) {
            if (app == null || !app.hasOwnProperty("name")) {
                console.error("You need to return an object with a name to be able to bootstrap the angular application.");
            }
            else if (appName != app.name) {
                console.warn("The defined app name in Default.aspx (" + appName + ") is not the same as the angular module name (" + app.name + ".");
            }
            // Bootstrap the application
            var appBootstrapName = app.name || appName;
            console.log("Bootstrapping application '" + appBootstrapName + "'");
            angular.bootstrap($app, [app.name || appName]);
        });
    });
});
//# sourceMappingURL=Main.js.map