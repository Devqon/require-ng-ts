define(["require", "exports"], function (require, exports) {
    var authorization = require("./Authorization/Authorization");
    var moduleName = "common";
    angular.module(moduleName, [
        authorization.name
    ])
        .constant("COMMON_CONSTANTS", {});
    return {
        name: moduleName
    };
});
//# sourceMappingURL=Common.js.map