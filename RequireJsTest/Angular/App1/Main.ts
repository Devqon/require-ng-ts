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

define(["app"]);