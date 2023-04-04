package runner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="classpath:features",
		glue="steps",
		tags= "@Feature",
		monochrome=true,
		dryRun=false,
		strict = true,
		plugin={
				"pretty",
				"html:target/reports/cucumber.html",
				"json:target/reports/cucumber.json"
				}
		)

public class SkyBlueBackGround {

}
