package Runner;

import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;
import cucumber.api.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "G:\\SeleniumProjects\\FreeCrmBDDFramework\\FreeCrmBDDFFramework\\src\\test\\java\\Features\\login.feature",
        glue = {"stepDefinitions"},
       format= {"pretty", "html:test-outout", "json:json_output/cucumber.json", "junit:junit_xml/cucumber.xml"},
       monochrome = true,
       strict = true,
       dryRun = false
)
public class TestRunner {

}
