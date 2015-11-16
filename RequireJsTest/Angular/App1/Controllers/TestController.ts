// Alle dependencies die ik hier zou hebben wil ik ook relatief
define([], () => {

    class TestController {

        public testText: string;

        static $inject = [];

        constructor() {
            this.testText = "some test text here";
        }
    }

    return TestController;

});