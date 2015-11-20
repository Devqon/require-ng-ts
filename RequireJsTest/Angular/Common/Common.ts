// Hoe krijg ik dit relatief?? ./Authorization/Authorization
import authorization = require("Common/Authorization/Authorization");

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