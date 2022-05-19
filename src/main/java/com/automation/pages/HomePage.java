package com.automation.pages;

import com.automation.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Reporter;

public class HomePage extends Utility {
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());
    public HomePage() {
        PageFactory.initElements(driver,this);
    }
    @FindBy(xpath = "//header/div[3]/div[1]/div[1]/div[6]/ul[1]/li[1]/a[1]")
    WebElement womenField;
    @FindBy(xpath = "//header/div[3]/div[1]/div[1]/div[6]/ul[1]/li[2]/a[1]")
    WebElement dressField;
    @FindBy(xpath = "//header/div[3]/div[1]/div[1]/div[6]/ul[1]/li[3]/a[1]")
    WebElement tshirtField;
    @FindBy(xpath = "//a[contains(text(),'Sign in')]")
    WebElement signInField;
    @FindBy(xpath = "//header/div[3]/div[1]/div[1]/div[1]/a[1]/img[1]")
    WebElement logoField;


    public void clickOnWomen(){

        clickOnElement(womenField);
        log.info("clickOnWomen : " + womenField.toString());
    }
    public void clickOnDress(){

        clickOnElement(dressField);
        log.info("clickOnDress : " + dressField.toString());
    }
    public void clickOnTshiet(){

        clickOnElement(tshirtField);
        log.info("clickOnTshiet : " + tshirtField.toString());
    }
    public void clickOnSignIn(){

        clickOnElement(signInField);
        log.info("clickOnSignIn : " + signInField.toString());
    }
    public String signIntext(){
        log.info("signIntext : " + signInField.toString());
        return getTextFromElement(signInField);


    }
    public void clickOnLogo(){

        clickOnElement(logoField);
        log.info("clickOnLogo : " + logoField.toString());
    }

}
