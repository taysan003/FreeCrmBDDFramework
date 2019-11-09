package stepDefenitions;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class TaggedHooksDefinition {
	
	@Before()
	public void setUP(){
		System.out.println("launch FF  @Before()");
		System.out.println("Enter URL for Free CRM APP  @Before()");
	}

	@After()
	public void tearDown(){
		System.out.println("close the browser @After()");
	}
	
	@Before(order=1)
	public void setUP1(){
		System.out.println("launch FF  @Before(order=1)");
		System.out.println("Enter URL for Free CRM APP  @Before(order=1)");
	}

	@After(order=1)
	public void tearDown1(){
		System.out.println("close the browser @After(order=1)");
	}
	
	@Before("@First")
	public void beforeFirst(){
		System.out.println("before only first scenario @Before(\"@First\")");
	}
	
	@After("@First")
	public void afterFirst(){
		System.out.println("after only first sceanrio  @After(\"@First\")");
	}
	
	@Before("@Second")
	public void beforeSecond(){
		System.out.println("before only second scenario  @Before(\"@Second\")");
	}
	
	@After("@Second")
	public void afterSecond(){
		System.out.println("after only second sceanrio  @After(\"@Second\")");
	}
	
	@Before("@Third")
	public void beforeThird(){
		System.out.println("before only third scenario  @Before(\"@Third\")");
	}
	
	@After("@Third")
	public void afterThird(){
		System.out.println("after only third sceanrio @After(\"@Third\")");
	}
	
	@Given("^this is the first step$")
	public void this_is_the_first_step() throws Throwable {
		System.out.println("1st step  @Given(\"^this is the first step$\")");
	}

	@When("^this is the second step$")
	public void this_is_the_second_step() throws Throwable {
		System.out.println("2nd step  @When(\"^this is the second step$\")");
	}

	@Then("^this is the third step$")
	public void this_is_the_third_step() throws Throwable {
		System.out.println("3rd step  @Then(\"^this is the third step$\")");
	}
}
