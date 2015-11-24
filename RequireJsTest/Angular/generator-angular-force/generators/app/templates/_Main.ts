var libsPath = "Libs/";

requirejs.config({
    paths: {
        "app": "<%= directory %>/App",
        // any additional libraries here
        // "myLib": libsPath + "/myLib/myFile"
    },

    shim: {
        "app": [
            <% if (uiRouting) { %>"uiRouter",<% } %>
            // define dependencies here
            // "myLib"
        ]
    }
});

define(["app"], (app: IRequireAngularModule) => {
    return app;
});