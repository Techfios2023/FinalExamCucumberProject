package steps;

import org.openqa.selenium.support.PageFactory;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import pages.MainPage;
import pages.TestBasePage;


public class StepsDefination_For_Test_Two extends TestBasePage {
	MainPage mainPage;
	
	@Before
	public void BeforeRun() {
		initDriver ();
	 
	 mainPage=PageFactory.initElements(driver, MainPage.class);
	}
	
	@Given("the Set white Background button exists")
	
	public void userIsOnDashboardPage() {
		driver.get("https://techfios.com/test/107/index.php");
	}

	
@When( "I click on the white button")

public void userClicksOnWhitegroundButton() {
	
	mainPage.userClicksOnWhiteBackgroundButton();
	takeScreenshot(driver);
	
}
@Then("the background color will change to white")

public void userShouldBeAbleToSeeWhiteBackGroundColor() {
	
	takeScreenshot(driver);
	
	
}

	
	@After
	public void teardown() {
		driver.close();
		driver.quit();
	}

}
