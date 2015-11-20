define(["require", "exports", "Common/Authorization/Authorization"], function (require, exports, authorization) {
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