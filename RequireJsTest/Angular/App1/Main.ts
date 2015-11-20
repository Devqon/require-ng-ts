requirejs.config({
    paths: {
        "angular-ui-router": "Libs/angular-ui-router/release/angular-ui-router",
        "app": "App1/App"
    },

    shim: {
        "angular-ui-router": ["angular"],
        "app": ["angular-ui-router"]
    }
});

 // first load App which defines the angular app module
define(["app"], (app: IRequireAngularModule) => {
    return app;
});