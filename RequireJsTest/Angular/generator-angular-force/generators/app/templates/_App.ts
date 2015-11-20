define([
    "angular",
    <% if (uiRouting) { %>
    "uiRouter",
    "<%= directory %>/Config",
    <% } %>
    // requirejs module dependencies:
    // - controllers
    // - services
], (
    angular: angular.IAngularStatic<% if (uiRouting) { %>
    ,uiRouter,
    config
    <% } %>
) => {

    var moduleName = "<%= appName %>";

    angular.module(moduleName, [
        "common",
        <% if (uiRouting) { %>
        "ui.router"
        <% } %>
        // module dependencies
    ])

    // constants

    // config

    <% if (uiRouting) { %>
    
    .config(config.Config)

    <% } %>

    // controllers

    // services

    // directives

    ;

    return {
        name: moduleName
    }

}); 