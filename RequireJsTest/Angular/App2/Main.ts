var libsPath = "Libs/";

requirejs.config({
    paths: {
        "app": "App2/App",
        
        "uiRouter": libsPath + "angular-ui-router/release/angular-ui-router.min",
        
        // any additional libraries here
        // "myLib": libsPath + "/myLib/myFile"
    },

    shim: {
        "app": [
            // define dependencies here
            // "myLib"
        ]
    }
});

define(["app"], (app: IRequireAngularModule) => {
    return app;
});