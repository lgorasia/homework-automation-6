package com.automation.pages;

import com.automation.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Reporter;

public class WomenCategoryPage extends Utility {
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());
    public WomenCategoryPage() {
        PageFactory.initElements(driver,this);
    }
    @FindBy(xpath = "//body/div[@id='page']/div[2]/div[1]/div[3]/div[2]/h1[1]/span[1]")
    WebElement womenTextfield;
    @FindBy(xpath = "//body/div[@id='page']/div[2]/div[1]/div[3]/div[2]/div[2]/ul[1]/li[1]/div[1]/a[1]/img[1]")
    WebElement topsLink;
    @FindBy(xpath = "//body/div[@id='page']/div[2]/div[1]/div[3]/div[2]/div[2]/ul[1]/li[2]/div[1]/a[1]/img[1]")
    WebElement dressesLInk;
    @FindBy(xpath = "//body/div[@id='page']/div[2]/div[1]/div[3]/div[2]/ul[1]/li[2]/div[1]/div[2]/h5[1]/a[1]")
    WebElement blouseField;
    @FindBy(xpath = "//body/div[@id='page']/div[2]/div[1]/div[3]/div[2]/ul[1]/li[3]/div[1]/div[2]/h5[1]/a[1]")
    WebElement printedDressField;
    @FindBy(xpath = "//a[contains(text(),'Printed Chiffon Dress')]")
    WebElement printedChiffonDressField;
    @FindBy(xpath = "//body/div[@id='page']/div[2]/div[1]/div[3]/div[2]/ul[1]/li[5]/div[1]/div[2]/h5[1]/a[1]")
    WebElement printedSummerDress;
    @FindBy(xpath = "//input[@id='quantity_wanted']")
    WebElement quantiyWantedField;
    @FindBy(css = "#color_8")
    WebElement whiteColorField;
    @FindBy(css = "#color_13")
    WebElement orangeColorField;
    @FindBy(css = "#color_15")
    WebElement greenColorField;
    @FindBy(css = "#color_14")
    WebElement blueColorField;
    @FindBy(css = "#group_1")
    WebElement sizeField;
    @FindBy(xpath = "//span[contains(text(),'Add to cart')]")
    WebElement addToCartField;
    @FindBy(xpath = "//body[1]/div[1]/div[1]/header[1]/div[3]/div[1]/div[1]/div[4]/div[1]/div[1]/h2[1]")
    WebElement productAddedToCart;
    @FindBy(xpath = "//header/div[3]/div[1]/div[1]/div[4]/div[1]/div[1]/span[1]")
    WebElement clickOnXField;


public  void clickOnXField(){

    clickOnElement(clickOnXField);
    log.info("clickOnXField : " + clickOnXField.toString());
    }

    public String productAddedToCart(){
        log.info("productAddedToCart : " + productAddedToCart.toString());
        return getTextFromElement(productAddedToCart);
    }
    public void clearQuantiyWanted(){
        driver.findElement(By.xpath("//input[@id='quantity_wanted']")).clear();
//        clickOnElement(quantiyWantedField.clear(););
//        quantiyWantedField.clear();

    }
    public String clickWomenText(){
        log.info("clickWomenText : " + womenTextfield.toString());
        return getTextFromElement(womenTextfield);
    }
    public void selectProduct(String product){
        if(product == "Blouse"){
            clickOnBlouse();
        }else if(product =="Printed Dress"){
            clickOnPrintedDress();
        }else if(product == "Printed Chiffon Dress"){
            clickOnPrintedChiffonDress();
        }else {
            clickOnSummerDress();
        }
    }
    public void selectColor(String colour ){
        if(colour == "White"){
            clickOnElement(whiteColorField);
        }else if(colour == "Orange"){
            clickOnElement(orangeColorField);
        }else if(colour == "Green"){
            clickOnElement(greenColorField);
        }else {
            clickOnElement(blueColorField);
        }
    }
    public void selectQuantity(String qty){

        sendTextToElement(quantiyWantedField,qty);
        log.info("selectQuantity : " + quantiyWantedField.toString());
    }
    public void selectSize(String size){

        sendTextToElement(sizeField,size);
        log.info("selectSize : " + sizeField.toString());
    }


    public void clickOnTops(){
        clickOnElement(topsLink);
        log.info("clickOnTops : " + topsLink.toString());
    }
    public void clickOnDresses(){
        clickOnElement(dressesLInk);
        log.info("clickOnDresses : " + dressesLInk.toString());
    }
    public void clickOnBlouse(){

        clickOnElement(blouseField);
        log.info("clickOnBlouse : " + blouseField.toString());
    }
    public void clickOnPrintedDress(){

        clickOnElement(printedDressField);
        log.info("clickOnPrintedDress : " + printedDressField.toString());
    }
    public void clickOnPrintedChiffonDress(){
        clickOnElement(printedChiffonDressField);
        log.info("clickOnPrintedChiffonDress : " + printedChiffonDressField.toString());
    }
    public void clickOnSummerDress(){

        clickOnElement(printedSummerDress);
        log.info("clickOnSummerDress : " + printedSummerDress.toString());
    }
    public void clickOnAddToCart(){

        clickOnElement(addToCartField);
        log.info("clickOnAddToCart : " + addToCartField.toString());
    }

}
