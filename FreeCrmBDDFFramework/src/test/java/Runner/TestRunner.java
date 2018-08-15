package Runner;

import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;
import cucumber.api.CucumberOptions;

@RunWith((Cucumber.class)
@CucumberOptions(
        features = "Features", glue = {"stepDefinition"}
        //format = {"pretty", "html:test-outout"}

public class TestRunner {

}
