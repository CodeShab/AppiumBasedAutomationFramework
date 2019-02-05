
/***********************************************************************************/
/*           Contains   Application / business reusable functions                  */
/***********************************************************************************/
var globalData          = require('../data/json/GlobalData'); 
var WebServicesData     = require('../data/json/WebServicesData');

/**
 * function getGlobalData(key)
 * This function will fetch the Global data based on testcase
 * key - Pass the variable name whose value to be lookedup
 */
exports.getGlobalData = function (key) {
    this.key = key;

    // This will split the testcase description where a hyphen '-' is encountered 
    var testcaseID = specDescription.split("-")[0];

    var res;   
    try{
        res = globalData[testcaseID][key];
    }catch (e) {
        throw new Error('Global data for "' + key +'" not defined.');
    }    
    return res;
};

exports.getWebServicesData = function (key) {
    this.key = key;

    // This will split the testcase description where a hyphen '-' is encountered 
    var testcaseID = specDescription.split("-")[0];
    
    var res;   
    try{
        res = WebServicesData[testcaseID][key];
    }catch (e) {
        throw new Error('Web Service Data for "' + key +'" not defined.');
    }    
    return res;
};