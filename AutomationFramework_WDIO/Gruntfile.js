module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        exec: {
            convertExcelToJSON: {cmd: "node node_modules/xlsx2json/index.js --export ../../data/dataSheet.xlsx"},
           // runWebDriverManager: "webdriver-manager update"
        },
        webdriver: {
            test: {
                configFile: './wdio.conf.js'
            }
        },
    });

    grunt.loadNpmTasks('grunt-webdriver');
    grunt.loadNpmTasks('grunt-exec');
    //grunt.registerTask('default', ['webdriver:test']);
    grunt.registerTask('wdioRunner', ['exec:convertExcelToJSON', 'webdriver:test']);
};