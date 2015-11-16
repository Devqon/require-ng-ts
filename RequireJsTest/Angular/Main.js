/// <reference path="../scripts/typings/tsd.d.ts" />
/*
    ???
    the config passed in here I want to be available everywhere
*/
require(["Main.Config"], function (config) {
    requirejs.config({
        paths: {
            "angular": config.libsPath + "angular/angular",
            "config": "Main.Config",
            "common": "Common/Common",
        },
        shim: {
            "angular": {
                exports: "angular"
            }
        }
    });
    require(["angular"], function (angular) {
        var wrapper = document.getElementById("ng-app-wrapper");
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
        ], function () {
            angular.bootstrap($app, [appName]);
        });
    });
});
//# sourceMappingURL=Main.js.map