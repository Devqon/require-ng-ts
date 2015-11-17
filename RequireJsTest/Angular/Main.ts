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

require(["config"], (config: IGlobalConfig) => {

    requirejs.config({
        paths: {
            "angular"   : config.libsPath + "angular/angular",
            "common"    : "Common/Common",
        },
        shim: {
            "angular": {
                exports: "angular"
            }
        }
    });

    require(["angular"], (angular: angular.IAngularStatic) => {

        var wrapper: HTMLElement            = document.getElementById(config.angularWrapperId);
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