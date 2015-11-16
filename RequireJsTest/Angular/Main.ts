/// <reference path="../scripts/typings/tsd.d.ts" />

/* 
    ???
    the config passed in here I want to be available everywhere
*/
require(["Main.Config"], (config: IConfig) => {

    requirejs.config({
        paths: {
            "angular"   : config.libsPath + "angular/angular",
            "config"    : "Main.Config",
            "common"    : "Common/Common",
        },
        shim: {
            "angular": {
                exports: "angular"
            }
        }
    });

    require(["angular"], (angular: angular.IAngularStatic) => {
        var wrapper: HTMLElement            = document.getElementById("ng-app-wrapper");
        var $app: angular.IAugmentedJQuery  = angular.element(wrapper);
        var directory: string               = $app.data("directory");
        var appName: string                 = $app.data("app-name");

        requirejs.config({
            paths: {
                appMain: directory + "/" + config.appMainFile,
            }
        });

        require([
            "common",
            "appMain"
        ], () => {
            angular.bootstrap($app, [appName]);
        });
    });

});