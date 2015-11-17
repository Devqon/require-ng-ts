var authorization: IRequireAngularModule = require("./Authorization/Authorization");

var moduleName = "common";

angular.module(moduleName, [
    authorization.name
])
    .constant("COMMON_CONSTANTS", {
        // Angular constants
    })

;

export = 
{
    name: moduleName
}