package stepDefinitions;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class LoginStepDefenition {
	
	WebDriver driver;
	
    @Given("^user is already on Login Page$")
    public void user_is_already_on_login_page(){
    	
    	driver = new ChromeDriver();
    	driver.get("https://www.freecrm.com/");
    	driver.manage().window().maximize();
    }
    
    @When("^title of login page is Free CRM$")
    public void title_of_login_page_is_Free_CRM() {
    	String title = driver.getTitle();
    	System.out.println(title);
    	Assert.assertEquals("#1 Free CRM software in the cloud for sales and service", title);
    }
    
    @Then("^user enters username and user enters password$")
    public void user_enters_username_and_user_enters_password() {
        driver.findElement(By.name("username")).sendKeys("naveenk");
        driver.findElement(By.name("password")).sendKeys("test@123");
    }
    @Then("^user clicks on login button$")
    public void user_clicks_on_login_button()  {
        WebElement loginBtn = driver.findElement(By.xpath("//input[@value='Login']"));
        JavascriptExecutor js = (JavascriptExecutor)driver;
        js.executeScript("arguments[0].click();", loginBtn);
    }

    @Then("^user is on home page$")
    public void user_is_on_home_page() {
    	String title = driver.getTitle();
    	System.out.println("Home page title ::"+title);
    	Assert.assertEquals("CRMPRO123", title);
    }

}