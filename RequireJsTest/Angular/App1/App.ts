// dit zou ik wel relatief willen zien
define(["App1/Controllers/TestController"], (testCtrl) => {

    angular.module("App1", ["common", "ui.router"])
        .controller("testCtrl", testCtrl)
    ;

});