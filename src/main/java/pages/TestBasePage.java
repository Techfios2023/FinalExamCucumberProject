package pages;

import java.awt.Component;
import java.awt.Container;
import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Random;
import java.util.concurrent.TimeUnit;

import javax.swing.JCheckBox;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

public class TestBasePage  { 
	
	public static WebDriver driver;

	 
	public  void initDriver (){
		
		System.setProperty("webdriver.chrome.driver", "Driver\\chromedriver.exe");
		driver=new ChromeDriver();
		driver.manage().deleteAllCookies();
		driver.manage().window().maximize();
		driver.manage().timeouts().pageLoadTimeout(10, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		
		
	
	}
	public void takeScreenshot( WebDriver driver) {
		
		TakesScreenshot screenshot=(TakesScreenshot)driver; //type casting 
		
		File sourceFile=screenshot.getScreenshotAs(OutputType.FILE);
		
		SimpleDateFormat formatter= new SimpleDateFormat("MMDDYY_HHmmss");
		Date date= new Date ();
		String lebel= formatter.format(date);
		
	//	String location=System.getProperty("user.dir");
		try {


				
		FileUtils.copyFile(sourceFile, new File(System.getProperty("user.dir")+ "/ScreenShots/"+lebel+ ".png" ));
			


		} catch (IOException e) {

			e.printStackTrace();
		}
	
	}
		public static int generateRandumNum(int boundNum) {

			Random rnd=new Random();
			int generateNum=rnd.nextInt(boundNum);
			return generateNum;
		
		}
		
		public void selectFromDropDown(WebElement element,String visibleText) {
			Select sel=new Select(element);
			sel.selectByVisibleText(visibleText);
		}
		
		public void waitForElement(String item) {
		    WebDriverWait wait = new WebDriverWait(driver,30);
		    WebElement element = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("item")));
		}
		
		
			
		}

	
