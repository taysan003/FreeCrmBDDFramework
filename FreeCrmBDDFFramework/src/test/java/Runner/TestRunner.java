package Runner;

import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;
import cucumber.api.CucumberOptions;

	@RunWith(Cucumber.class)
	@CucumberOptions(
	        features = "G:\\SeleniumProjects\\FreeCrmBDDFramework\\FreeCrmBDDFFramework\\src\\test\\java\\Features\\taggedhooks.feature",
	        glue = {"stepDefinitions"},
	        format= {"pretty", "html:test-outout", "json:json_output/cucumber.json", "junit:junit_xml/cucumber.xml"},
	        monochrome = true,
	        strict = true, //it will check if any step is not defined in definition file
	        dryRun = false //to check the mapping is proper between feature file and step def file
	        //tags = {"~@smokeTest", "~@RegressionTest", "~@End2End"} // (, )= OR
	)
public class TestRunner {

}

// OR - , {"@smokeTest, @RegressionTest"} 

//AND - , {"@smokeTest", "@RegressionTest"} 

// ~ - to ignore {"~@smokeTest", "@RegressionTest"}
