package com.automation.steps;

import com.automation.pages.HomePage;
import com.automation.pages.WomenCategoryPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.testng.Assert;

public class WomenCategory {
    @And("^I click on WOMEN$")
    public void iClickOnWOMEN() {
        new HomePage().clickOnWomen();

    }

    @Then("^I should see 'WOMWN' text$")
    public void iShouldSeeWOMWNText() {
        String actualText = new WomenCategoryPage().clickWomenText();
        String expectedText = "WOMEN ";
        Assert.assertEquals(actualText, expectedText);

    }

    @And("^I click on the product \"([^\"]*)\"$")
    public void iClickOnTheProduct(String product) {
        new WomenCategoryPage().selectProduct(product);


    }

    @And("^I change quantity \"([^\"]*)\"$")
    public void iChangeQuantity(String qty) {
        new WomenCategoryPage().clearQuantiyWanted();
        new WomenCategoryPage().selectQuantity(qty);


    }

    @And("^I select size \"([^\"]*)\"$")
    public void iSelectSize(String size) {
        new WomenCategoryPage().selectSize(size);


    }

    @And("^I select colour \"([^\"]*)\"$")
    public void iSelectColour(String colour) {
        new WomenCategoryPage().selectColor(colour);


    }

    @And("^I click on Add To Cart Button$")
    public void iClickOnAddToCartButton() {
        new WomenCategoryPage().clickOnAddToCart();
    }

    @Then("^I shoud see popup message 'Product successfully added to your shopping cart'$")
    public void iShoudSeePopupMessageProductSuccessfullyAddedToYourShoppingCart() {
        String expectedMessage = "Product successfully added to your shopping cart";
        String actualMessage = new WomenCategoryPage().productAddedToCart();
        Assert.assertEquals(expectedMessage, expectedMessage);
    }

    @And("^I click on X button to close the popup$")
    public void iClickOnXButtonToCloseThePopup() {
        new WomenCategoryPage().clickOnXField();
    }


}
