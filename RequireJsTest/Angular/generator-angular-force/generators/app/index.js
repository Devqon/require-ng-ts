"use strict";

var generators = require("yeoman-generator");

module.exports = generators.Base.extend({
    
    constructor: function() {
        generators.Base.apply(this, arguments);

        // arguments
        this.argument("appName", { type: String, required: true });

        // options
        this.option("domain", { type: String, required: true, default: "Proces/beheer" });
    },

    promptUser: function() {
        var done = this.async();

        console.log(this.yeoman);

        var prompts = [
            {
                name: "directory",
                message: "What is the name of the directory?"
            },
            {
                name: "htmlFile",
                message: "Custom root HTML name?",
                default: "App"
            },
            {
                name: "useUiRouting",
                type: Boolean,
                message: "Use UI routing?"
            }
        ];

        this.prompt(prompts, function(props) {
            this.directory = props.directory || this.appName;
            this.htmlFile = props.htmlFile;
            this.useUiRouting = props.useUiRouting;

            done();
        }.bind(this));
    },
    scaffoldFolders: function () {
        var appDirectory = this.directory;

        this.mkdir(appDirectory + "/Controllers");
        this.mkdir(appDirectory + "/Controllers/Templates");
        this.mkdir(appDirectory + "/Services");
    },
    copyMainFiles: function() {

        var context = {
            appName: this.appName,
            uiRouting: this.useUiRouting,
            directory: this.directory
        };

        var appDirectory = this.domain + "/" + this.directory;

        this.template("Default.aspx", this.directory + "/Default.aspx", context);
        this.template("Default.aspx.cs", this.directory + "/Default.aspx.cs", context);
        this.template("Default.aspx.designer.cs", this.directory + "/Default.aspx.designer.cs", context);
        this.template("_Main.ts", this.directory + "/Main.ts", context);
        this.template("_App.html", this.directory + "/" + this.htmlFile + ".html");
        this.template("_App.ts", this.directory + "/App.ts", context);
        if (this.useUiRouting) {
            this.copy("_Config.ts", this.directory + "/Config.ts");
        }
    }

});