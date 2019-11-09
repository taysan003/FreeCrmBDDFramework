package Runner;
import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "G:\\SeleniumProjects\\FreeCrmBDDFramework\\FreeCrmBDDFFramework_2\\src\\main\\java\\Features\\hooks.feature",
        glue = {"stepDefenitions"},
        format= {"pretty", "html:test-outout", "json:json_output/cucumber.json", "junit:junit_xml/cucumber.xml"},
        monochrome = true, //generate readable format for output
        strict = true, //it will check if any step is not defined in step definition file
        dryRun = false  //to check the mapping is proper between feature file and step def file
        //tags = {"@smokeTest", "~@RegressionTest", "~@End2End"} // (, )= OR
)

public class TestRunner {

}
