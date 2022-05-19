package com.automation.steps;

import com.automation.pages.CreateAccountPage;
import com.automation.pages.HomePage;
import com.automation.pages.SignInPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

public class SignPageTest {
    @Given("^I am on homepage$")
    public void iAmOnHomepage() {


    }

    @When("^I click on Sign In link$")
    public void iClickOnSignInLink() {
        new HomePage().clickOnSignIn();
    }

    @Then("^I should see 'AUTHENTICATION' message is displayed$")
    public void iShouldSeeAUTHENTICATIONMessageIsDisplayed() {
        String actualText = new SignInPage().authenticationField();
        String expectedText = "AUTHENTICATION";
        Assert.assertEquals(expectedText,actualText);

    }

    @And("^I enter username \"([^\"]*)\"$")
    public void iEnterUsername(String username)  {
        new SignInPage().clickOnEmail(username);


    }

    @And("^I enter password \"([^\"]*)\"$")
    public void iEnterPassword(String password)  {
        new SignInPage().clickOnPassword(password);


    }

    @And("^I click on Sign in Button$")
    public void iClickOnSignInButton() {
        new SignInPage().clickOnSignIn();
    }


    @Then("^I shold see error \"([^\"]*)\"$")
    public void iSholdSeeError(String message) {
        String actualText = new SignInPage().errormessage();
        String expectedMessage = message;
        Assert.assertEquals(actualText,expectedMessage);


    }

    @Then("^I should see 'Sign out' link is displayed$")
    public void iShouldSeeSignOutLinkIsDisplayed() {
        String actualText = new CreateAccountPage().signOutText();
        String expectedText = "Sign out";
        Assert.assertEquals(actualText, expectedText);
    }

    @And("^I click on Sign out Button$")
    public void iClickOnSignOutButton() {
        new CreateAccountPage().clickOnSignOut();
    }

    @Then("^I should see 'Sign In' Link displayed$")
    public void iShouldSeeSignInLinkDisplayed() {
        String actualText=new HomePage().signIntext();
        String expectedText = "Sign in";
        Assert.assertEquals(actualText,expectedText);
    }
}
