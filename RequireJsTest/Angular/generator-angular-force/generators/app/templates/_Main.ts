var libsPath = "Libs/";

requirejs.config({
    paths: {
        "app": "<%= appName %>/App",
        <% if (uiRouting) { %>
        "uiRouter": libsPath + "angular-ui-router/release/angular-ui-router.min",
        <% } %>
        // any additional libraries here
        // "myLib": libsPath + "/myLib/myFile"
    },

    shim: {
        "app": [
            <% if (uiRouting) { %>
            "uiRouter",
            <% } %>
            // define dependencies here
            // "myLib"
        ]
    }
});

define(["app"], (app: IRequireAngularModule) => {
    return app;
});