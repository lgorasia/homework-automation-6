package com.automation.steps;

import com.automation.pages.CreateAccountPage;
import com.automation.pages.SignInPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.testng.Assert;

public class CreateAccountTest {
    @And("^I Enter email address to create account$")
    public void iEnterEmailAddressToCreateAccount() {
        new SignInPage().clickOnEmailToCreateAccount("7ljpatel@yahoo.com");
    }

    @And("^I click on 'Create an account' button$")
    public void iClickOnCreateAnAccountButton() {
        new SignInPage().clickOnCreateAccount();
    }

    @And("^I enter first name$")
    public void iEnterFirstName() {
        new CreateAccountPage().clickOnFirstName("Pavan");
    }

    @And("^I enter last name$")
    public void iEnterLastName() {
        new CreateAccountPage().clickOnLastName("Patidar");
    }

    @And("^I enter password to create account$")
    public void iEnterPasswordToCreateAccount() {
        new CreateAccountPage().clickOnPassword("12345678");
    }


    @And("^I enter address$")
    public void iEnterAddress() {
        new CreateAccountPage().clickOnAddress("ABC High Street");
    }

    @And("^I enter city$")
    public void iEnterCity() {
        new CreateAccountPage().clickOnCity("London");
    }

    @And("^I enter state$")
    public void iEnterState() {
        new CreateAccountPage().clickOnState("Gujarat");
    }

    @And("^I enter zipcode$")
    public void iEnterZipcode() {
        new CreateAccountPage().clickOnZipcode("99501");
    }

    @And("^I enter phone number$")
    public void iEnterPhoneNumber() {
        new CreateAccountPage().clickOnMobilePhone("0987654321");
    }

    @And("^I enter future refference$")
    public void iEnterFutureRefference() {
        new CreateAccountPage().clickOnFutureRefference("House Address");
    }

    @And("^I click on 'Register' button$")
    public void iClickOnRegisterButton() {
        new CreateAccountPage().clickOnRegister();
    }

    @Then("^I should see 'My Account' text displayed$")
    public void iShouldSeeMyAccountTextDisplayed() {
        String actualText =new CreateAccountPage().myAccountText();
        String expectedText= "MY ACCOUNT";
        Assert.assertEquals(actualText,expectedText);
    }
}
