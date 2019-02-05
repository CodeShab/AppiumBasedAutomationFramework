//const assert = require('assert');
//import assert from 'assert';
import { expect } from 'chai';
var loginPage = require('../pageObjects/loginPageObject.js');
var userData = require('../data/testdata.json');

describe('Mobile Automation Demo',   function() {
   // this.retries(2);
    //this.timeout(60000);
    // before(() => {
    //     browser.url('https://google.com');
    // });

    beforeEach(function() {
        //browser.url('https://google.com');
    });

    // after(() => {
    // });

    // afterEach(() => {
    //     browser.url('https://google.com');
    // });

    it('TC_LVMotar_001- Login  Negative scenario', function(){
        //Sign in into the appliation
        loginPage.login(userData.userName1, "qwerty1!");

        //waits for the error message popup
        browser.element("//*[@resource-id='alert-msg-0']").waitForExist(20000);

        //captures the error message
        var errorMessageText = browser.element("//*[@resource-id='alert-msg-0']").getText();

        //Validates the error message witht the error text
        expect(errorMessageText).to.include('Enter correct credentials !!');

        //closes the error message
        browser.element("//android.widget.Button[contains(@text,'OK')]").click();
    });

    it('TC_LVMotar_002- End to End scenario', function(){
        //Sign in into the appliation
        loginPage.login(userData.userName1, userData.password1);

        //Clicks on permission button
        browser.element("//android.widget.Button[contains(@resource-id,'permission_allow_button')]").waitForExist(20000);
        var permissionPopUp = browser.element("//android.widget.Button[contains(@resource-id,'permission_allow_button')]");
        permissionPopUp.click();

         //Clicks on Simo Assist
        browser.element("//android.view.View[@text='SimoAssist']").waitForExist(20000);
        var simoAssist = browser.element("//android.view.View[@text='SimoAssist']");
        simoAssist.click();

        //Opens up Power rating pop up
        browser.element("//android.widget.Spinner[contains(@text,'Power rating')]").waitForExist(20000);
        var powerRatingDropdown = browser.element("//android.widget.Spinner[contains(@text,'Power rating')]");
        powerRatingDropdown.click();

        //Selects Power rating option
        browser.element("//android.widget.RadioButton[@text='1.1']").waitForExist(20000);
        var powerRating = browser.element("//android.widget.RadioButton[@text='1.1']");
        powerRating.click();

        //Opens up Construction pop up
        browser.element("//android.widget.Spinner[contains(@text,'Construction')]").waitForExist(20000);
        var constructionDropdown = browser.element("//android.widget.Spinner[contains(@text,'Construction')]");
        constructionDropdown.click();

        //Selects Construction option
        browser.element("//android.widget.RadioButton[@text='IMB35']").waitForExist(20000);
        var construction = browser.element("//android.widget.RadioButton[@text='IMB35']");
        construction.click();

        //Opens up Effiency pop up
        browser.element("//android.widget.Spinner[contains(@text,'Efficiency')]").waitForExist(20000);
        var efficiencyDropdown = browser.element("//android.widget.Spinner[contains(@text,'Efficiency')]");
        efficiencyDropdown.click();

        //Selects Efficiency option
        browser.element("//android.widget.RadioButton[@text='IE3']").waitForExist(20000);
        var efficiency = browser.element("//android.widget.RadioButton[@text='IE3']");
        efficiency.click();

         //Opens up Pole pop up
        browser.element("//android.widget.Spinner[contains(@text,'Pole')]").waitForExist(20000);
        var poleDropdown = browser.element("//android.widget.Spinner[contains(@text,'Pole')]");
        poleDropdown.click();

        //Selects pole option
        browser.element("//android.widget.RadioButton[@text='2P']").waitForExist(20000);
        var efficiency = browser.element("//android.widget.RadioButton[@text='2P']");
        efficiency.click();

        //clicks on search button
        browser.element("//android.widget.Button[@resource-id='searchSimoq']").waitForExist(20000);
        var search = browser.element("//android.widget.Button[@resource-id='searchSimoq']");
        search.click();

         //adds to cart
         browser.element("//android.widget.Image[@text='Add To Cart']").waitForExist(20000);
         var addToCart = browser.element("//android.widget.Image[@text='Add To Cart']");
         addToCart.click();

         //navigate to cart
         browser.element("//android.widget.Button[@resource-id='cartCount']").waitForExist(20000);
         var navigateToCart = browser.element("//android.widget.Button[@resource-id='cartCount']");
         navigateToCart.click();

         //check out
         browser.element("//android.widget.Button[contains(@text,'Checkout')]").waitForExist(20000);
         var checkOut = browser.element("//android.widget.Button[contains(@text,'Checkout')]");
         checkOut.click();

         //Enter project name
         browser.element("//android.widget.EditText[contains(@text,'Project Name')]").waitForExist(20000);
         var projectName = browser.element("//android.widget.EditText[contains(@text,'Project Name')]");
         projectName.setValue('SimoQTest');

         //Enter project location
         browser.element("//android.widget.EditText[contains(@text,'Project Location')]").waitForExist(20000);
         var projectName = browser.element("//android.widget.EditText[contains(@text,'Project Location')]");
         projectName.setValue('SimoQTestLocation');

         //Location Dropdown
         browser.element("//android.widget.Spinner[@resource-id='undefined']").waitForExist(20000);
         var checkOut = browser.element("//android.widget.Spinner[@resource-id='undefined']");
         checkOut.click();

         //Location Selection
         browser.element("//android.widget.RadioButton[contains(@text,'Bangalore Office')]").waitForExist(20000);
         var location = browser.element("//android.widget.RadioButton[contains(@text,'Bangalore Office')]");
         location.click();

          //Place Enquiry
          browser.element("//android.widget.Button[contains(@text,'Place Enquiry')]").waitForExist(20000);
          var placeEnquiry = browser.element("//android.widget.Button[contains(@text,'Place Enquiry')]");
          placeEnquiry.click();

          //Get Validation Text
          browser.element("//android.view.View[contains(@text,'Thank you')]").waitForExist(20000);
          var validationText = browser.element("//android.view.View[contains(@text,'Thank you')]");
          var validation = validationText.getText();
          console.log(validation);
        
        // validates the Completion message
          expect(validation).to.include('Thank you');

          browser.pause(5000);
    });
});