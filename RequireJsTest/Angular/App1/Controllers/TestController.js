// Alle dependencies die ik hier zou hebben wil ik ook relatief
define([], function () {
    var TestController = (function () {
        function TestController() {
            this.testText = "some test text here";
        }
        TestController.$inject = [];
        return TestController;
    })();
    return TestController;
});
//# sourceMappingURL=TestController.js.map