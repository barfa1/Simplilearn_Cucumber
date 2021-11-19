package stepdefs;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
//import org.testng.asserts.SoftAssert;

import io.cucumber.datatable.DataTable;
//import gherkin.ast.DataTable;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class LoginStepDefs {
	
	WebDriver driver = BaseClass.driver;
	@Given("^User has navigated on login page$")
    public void user_has_navigated_on_login_page() throws Throwable {
		
        driver.get("https://www.simplilearn.com/");
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(4000, TimeUnit.MILLISECONDS);
        WebElement LoginLink = driver.findElement(By.linkText("Log in"));
        WebDriverWait wait = new WebDriverWait(driver,35);
        wait.until(ExpectedConditions.visibilityOf(LoginLink));
        LoginLink.click();
        
    }
	
	 @When("^user enter correct username and password$")
	    public void user_enter_correct_username_and_password() throws Throwable {
		 WebElement UserName = driver.findElement(By.name("user_login"));
			UserName.sendKeys("abc@gmail.com");
			WebElement password = driver.findElement(By.id("password"));
			password.sendKeys("Deva@123");
	    }

	 @When("^user enter correct username \"([^\"]*)\" and password \"([^\"]*)\"$")
	    public void user_enter_correct_username_something_and_password_something(String uname, String pwd) throws Throwable {
		 WebElement UserName = driver.findElement(By.name("user_login"));
//			System.out.println(UserName.getAttribute("placeholder"));
			UserName.sendKeys(uname);
			
			WebElement Password = driver.findElement(By.id("password"));
			Password.sendKeys(pwd);
			
	    }

    @Then("^user should be navigated to the Homepage$")
    public void user_should_be_navigated_to_dashboard() throws Throwable {
        
    }

    @And("^User clicks on login button$")
    public void user_clicks_on_login_button() throws Throwable {
    	WebElement loginlink = driver.findElement(By.name("btn_login"));
		loginlink.click();
    }
    
    @Then("^user should be get message \"([^\"]*)\"$")
    public void user_should_be_get_message_something(String error) throws Throwable {
    	WebElement msg = driver.findElement(By.id("msg_box"));
		String msg1 = msg.getText();
		Assert.assertEquals(msg1, error);
		
    }
    
    @When("^user enter correct  credentials$")
    public void user_enter_correct_credentials(DataTable table) throws Throwable {
        String uname = table.cell(1,1);
        String pwd = table.cell(2,1);
        WebElement UserName = driver.findElement(By.name("user_login"));
//		System.out.println(UserName.getAttribute("placeholder"));
		UserName.sendKeys(uname);
		
		WebElement Password = driver.findElement(By.id("password"));
		Password.sendKeys(pwd);
    }
}