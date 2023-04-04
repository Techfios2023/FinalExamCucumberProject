package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class MainPage extends TestBasePage {



	WebDriver driver;

	public MainPage(WebDriver driver) {
		this.driver = driver;
	}
	
	
	@FindBy(how = How.XPATH, using = "//button[@onclick='myFunctionSky()']")
	WebElement SKY_BLUE_BUTTON;
	
	
	//for test 2
	
	@FindBy(xpath="//button[@onclick='myFunctionWhite()']")WebElement WHITE_BACKGROUND_BUTTON;
	@FindBy(xpath="//button[@onclick='myFunctionWhite()']")WebElement ALL_CHECK_BOXES;
	
	@FindBy(xpath="//*[@id=/todos-content/]/form/ul/li[1]/input")
	WebElement VALIDATE_EVERYTHING_IS_DELETED;
	
	
					
	


public void userClicksOnSkyBlueBackgroundButton() {
	SKY_BLUE_BUTTON.click();
	
}

//For test 2

public void userClicksOnWhiteBackgroundButton() {
	
	WHITE_BACKGROUND_BUTTON.click();
}

	}
