var libsPath = "Libs/";
requirejs.config({
    paths: {
        "app": "App2/App",
        "uiRouter": libsPath + "angular-ui-router/release/angular-ui-router.min",
    },
    shim: {
        "app": []
    }
});
define(["app"], function (app) {
    return app;
});
//# sourceMappingURL=Main.js.map