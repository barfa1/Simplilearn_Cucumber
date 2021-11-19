package stepdefs;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;


@RunWith(Cucumber.class)
@CucumberOptions(
		monochrome = true,
		plugin= {"pretty","html:target/cucumber-html","json:target/cucumber.json"},
		features = "src/test/java/features",
		//tags= {"@Regression","@Sanity"}, // And Condition
		//tags = {"@Regression,@Sanity"}, //Or Condition
		//tags = {"@Regression"},
		tags = {"~@DataTable"},
//		tags = {"@LoginFeature"},
		glue = {"stepdefs"}
		)
public class TestRunner {

}
