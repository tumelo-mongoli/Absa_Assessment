package com.example.tests;

import java.util.regex.Pattern;
import java.util.concurrent.TimeUnit;
import org.junit.*;
import static org.junit.Assert.*;
import static org.hamcrest.CoreMatchers.*;
import org.openqa.selenium.*;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.Select;

public class AbsaTestCase {
  private WebDriver driver;
  private String baseUrl;
  private boolean acceptNextAlert = true;
  private StringBuffer verificationErrors = new StringBuffer();

  @Before
  public void setUp() throws Exception {
    driver = new FirefoxDriver();
    baseUrl = "https://www.google.com/";
    driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
  }

  @Test
  public void testAbsaTestCase() throws Exception {
    driver.get("http://www.way2automation.com/angularjs-protractor/webtables/");
    // ERROR: Caught exception [ERROR: Unsupported command [captureEntirePageScreenshot |  | ]]
    assertTrue(driver.findElement(By.xpath("//*[@class=\"smart-table table table-striped\"]")).isDisplayed());
    driver.findElement(By.xpath("//*[text()=\" Add User\"]")).click();
    // ERROR: Caught exception [ERROR: Unsupported command [captureEntirePageScreenshot |  | ]]
    // ERROR: Caught exception [ERROR: Unsupported command [getEval | Math.round (Math.random() * 100) | ]]
    driver.findElement(By.xpath("//*[@name=\"FirstName\"]")).clear();
    driver.findElement(By.xpath("//*[@name=\"FirstName\"]")).sendKeys("FName1" + random);
    driver.findElement(By.xpath("//*[@name=\"LastName\"]")).clear();
    driver.findElement(By.xpath("//*[@name=\"LastName\"]")).sendKeys("LName1" + random);
    driver.findElement(By.xpath("//*[@name=\"UserName\"]")).clear();
    driver.findElement(By.xpath("//*[@name=\"UserName\"]")).sendKeys("User1" + random);
    driver.findElement(By.xpath("//*[@name=\"Password\"]")).clear();
    driver.findElement(By.xpath("//*[@name=\"Password\"]")).sendKeys("Pass1");
    driver.findElement(By.xpath("//*[@value=\"15\"]")).click();
    new Select(driver.findElement(By.xpath("//*[@name=\"RoleId\"]"))).selectByVisibleText("Admin");
    driver.findElement(By.xpath("//*[@name=\"Email\"]")).clear();
    driver.findElement(By.xpath("//*[@name=\"Email\"]")).sendKeys("admin@mail.com");
    // ERROR: Caught exception [ERROR: Unsupported command [getEval | "082"+Math.round (Math.random() * 100000)+"76" | ]]
    driver.findElement(By.xpath("//*[@name=\"Mobilephone\"]")).clear();
    driver.findElement(By.xpath("//*[@name=\"Mobilephone\"]")).sendKeys(CellNUmber);
    // ERROR: Caught exception [ERROR: Unsupported command [captureEntirePageScreenshot |  | ]]
    driver.findElement(By.xpath("//*[text()=\"Save\"]")).click();
    assertTrue(driver.findElement(By.xpath("//*[@class=\"smart-table-data-row ng-scope\"][1]/td")).isDisplayed());
    // ERROR: Caught exception [ERROR: Unsupported command [captureEntirePageScreenshot |  | ]]
  }

  @After
  public void tearDown() throws Exception {
    driver.quit();
    String verificationErrorString = verificationErrors.toString();
    if (!"".equals(verificationErrorString)) {
      fail(verificationErrorString);
    }
  }

  private boolean isElementPresent(By by) {
    try {
      driver.findElement(by);
      return true;
    } catch (NoSuchElementException e) {
      return false;
    }
  }

  private boolean isAlertPresent() {
    try {
      driver.switchTo().alert();
      return true;
    } catch (NoAlertPresentException e) {
      return false;
    }
  }

  private String closeAlertAndGetItsText() {
    try {
      Alert alert = driver.switchTo().alert();
      String alertText = alert.getText();
      if (acceptNextAlert) {
        alert.accept();
      } else {
        alert.dismiss();
      }
      return alertText;
    } finally {
      acceptNextAlert = true;
    }
  }
}
