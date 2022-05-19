package com.automation.pages;

import com.automation.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Reporter;

public class CreateAccountPage extends Utility {
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());
    public CreateAccountPage() {
        PageFactory.initElements(driver, this);
    }

    @FindBy(xpath = "//input[@id='customer_firstname']")
    WebElement firstNamefield;
    @FindBy(xpath = "//input[@id='customer_lastname']")
    WebElement lastNameField;
    @FindBy(xpath = "//input[@id='passwd']")
    WebElement passwordField;
    @FindBy(id = "address1")
    WebElement addressField;
    @FindBy(xpath = "//input[@id='city']")
    WebElement cityField;
    @FindBy(xpath = "//select[@id='id_state']")
    WebElement stateField;
    @FindBy(xpath = "//input[@id='postcode']")
    WebElement zipcodeField;
    @FindBy(xpath = "//select[@id='id_country']")
    WebElement countryField;
    @FindBy(xpath = "//input[@id='phone_mobile']")
    WebElement mobilePhonefield;
    @FindBy(xpath = "//input[@id='alias']")
    WebElement futureReferenceField;
    @FindBy(xpath = "//body[1]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/form[1]/div[4]/button[1]/span[1]")
    WebElement registerButton;
    @FindBy(xpath = "//h1[contains(text(),'My account')]")
    WebElement myAccountTextField;
    @FindBy(xpath = "//header/div[2]/div[1]/div[1]/nav[1]/div[2]/a[1]")
    WebElement signOutField;

    public String signOutText(){
        log.info("signOutText : " + signOutField.toString());
        return getTextFromElement(signOutField);
    }
    public void clickOnSignOut(){
                clickOnElement(signOutField);
        log.info("clickOnSignOut : " + signOutField.toString());
    }

    public String myAccountText(){
        log.info("myAccountText : " + myAccountTextField.toString());
        return getTextFromElement(myAccountTextField);
    }

    public void clickOnFirstName(String name) {

        sendTextToElement(firstNamefield, name);
        log.info("clickOnFirstName : " + firstNamefield.toString());
    }

    public void clickOnLastName(String lastName) {

        sendTextToElement(lastNameField, lastName);
        log.info("clickOnLastName : " + lastNameField.toString());
    }

    public void clickOnPassword(String password) {

        sendTextToElement(passwordField, password);
        log.info("clickOnPassword : " + passwordField.toString());
    }

    public void clickOnAddress(String address) {

        sendTextToElement(addressField, address);
        log.info("clickOnAddress : " + addressField.toString());
    }
    public void clickOnCity(String city){

        sendTextToElement(cityField,city);
        log.info("clickOnCity : " + cityField.toString());


    }
    public void clickOnState(String state){

        sendTextToElement(stateField,state);
        log.info("clickOnState : " + stateField.toString());
    }
    public void clickOnZipcode(String zip){

        sendTextToElement(zipcodeField,zip);
        log.info("clickOnZipcode : " + zipcodeField.toString());
    }
    public void clickOnCountry(String country){

        sendTextToElement(countryField,country);
        log.info("clickOnCountry : " + countryField.toString());
    }
    public void clickOnMobilePhone(String phone){

        sendTextToElement(mobilePhonefield,phone);
        log.info("clickOnMobilePhone : " + mobilePhonefield.toString());
    }
    public void clickOnFutureRefference(String referene){

        sendTextToElement(futureReferenceField,referene);
        log.info("clickOnFutureRefference : " + futureReferenceField.toString());
    }
    public void clickOnRegister(){

        clickOnElement(registerButton);
        log.info("clickOnRegister : " + registerButton.toString());
    }


}
