var loginPageObject = function() {
    //locators
    var usernameTextboxLocator      = "//*[@resource-id='login_id']/android.widget.EditText";
    var passowrdTextboxLocator      = "//android.view.View[@resource-id='login_id']/../../../following-sibling::android.view.View/descendant::android.widget.EditText";
    var loginButtonLocator          = "//android.widget.Button[contains(@text,'Login')]";

    //web elements
    //  var usernameTextbox     = browser.element(usernameTextboxLocator);
    //  var passowrdTextbox     = browser.element(passowrdTextboxLocator);
    // var loginButton         = browser.element(loginButtonLocator);

    /***************************************************************************************/
    /**
     * function addTodoListElement (textValue)
     * This function adds a new todo list item
     *  @param {*} textValue this parameter represents the list element text
     **/
    /****************************************************************************************/
    this.login = function(username, password) {
        //browser.pause(10000);
        browser.element(usernameTextboxLocator).waitForExist(20000);
        browser.element(usernameTextboxLocator).setValue(username);
        browser.element(passowrdTextboxLocator).setValue(password);
        browser.element(loginButtonLocator).click();
    };
};

var loginPage = new loginPageObject();
module.exports =  loginPage;