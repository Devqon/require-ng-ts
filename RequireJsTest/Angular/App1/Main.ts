var config: IGlobalConfig = require("config");

requirejs.config({
    paths: {
        "app": "App1/App"
    },

    shim: {
        "app": [
            "angular-sanitize",
            "lib.uiRouter",
            "lib.uiCodeMirror"
        ]
    }
});

 // first load App which defines the angular app module
define(["app"], (app: IRequireAngularModule) => {
    return app;
});