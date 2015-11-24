// Alle dependencies die ik hier zou hebben wil ik ook relatief
define([], () => {

    class TestController {

        public editMode: boolean;
        public testText: string = "some test text here";
        public codeMirrorOptions = {
            lineNumbers: true,
            theme: 'twilight',
            readOnly: 'nocursor',
            lineWrapping: true,
            mode: 'xml'
        }

        static $inject = [];

        constructor() {
            this.testText = "<div>\n\t<h1>H1 here</h1>\n\t<h3>H3 here</h3>\n<hr/>\n\t<ul>\n\t\t<li>li1</li>\n\t\t<li>li2</li>\n\t</ul>\n</div>";
        }

        public save() {
            this.editMode = false;
        }

        public edit() {
            this.editMode = true;
        }
    }

    return TestController;

});