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
            "angular"           : config.libsPath + "angular/angular",
            "common"            : "Common/Common",

            // angular libs
            "angular-sanitize"  : config.libsPath + "angular-sanitize/angular-sanitize",

            // optional libs, always prefix with 'lib'
            "lib.uiRouter"      : config.libsPath + "angular-ui-router/release/angular-ui-router",
            "lib.uiCodeMirror"  : config.libsPath + "angular-ui-codemirror/ui-codemirror"
        },
        packages: [
            {
                name: "lib.codeMirror",
                location: config.libsPath + "codemirror",
                main: "lib/codemirror"
            }
        ],
        shim: {
            "angular": {
                exports: "angular"
            },
            "angular-sanitize": ["angular"],
            "uiRouter": ["angular"],
            "lib.uiCodeMirror": {
                deps: ["angular", "lib.codeMirror"],
                init: (angular, codeMirror) => {
                    (<any>window).CodeMirror = codeMirror;
                }
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
        ], (common, app: IRequireAngularModule) => {
            if (app == null || !app.hasOwnProperty("name") || !app.name) {
                console.error("You need to return an object with a name to be able to bootstrap the angular application.");
            } else if (appName != app.name) {
                console.warn("The defined app name in Default.aspx (" + appName + ") is not the same as the angular module name (" + app.name + ".");
            }

            // Bootstrap the application
            var appBootstrapName = app.name || appName;
            console.debug("-- Bootstrapping application '" + appBootstrapName + "' --");
            angular.bootstrap($app, [appBootstrapName]);
        });
    });

});