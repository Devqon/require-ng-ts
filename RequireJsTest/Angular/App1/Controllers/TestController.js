// Alle dependencies die ik hier zou hebben wil ik ook relatief
define([], function () {
    var TestController = (function () {
        function TestController() {
            this.testText = "some test text here";
            this.codeMirrorOptions = {
                lineNumbers: true,
                theme: 'twilight',
                readOnly: 'nocursor',
                lineWrapping: true,
                mode: 'xml'
            };
            this.testText = "<div>\n\t<h1>H1 here</h1>\n\t<h3>H3 here</h3>\n<hr/>\n\t<ul>\n\t\t<li>li1</li>\n\t\t<li>li2</li>\n\t</ul>\n</div>";
        }
        TestController.prototype.save = function () {
            this.editMode = false;
        };
        TestController.prototype.edit = function () {
            this.editMode = true;
        };
        TestController.$inject = [];
        return TestController;
    })();
    return TestController;
});
//# sourceMappingURL=TestController.js.map