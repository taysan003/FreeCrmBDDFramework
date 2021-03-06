package stepDefenitions;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class HooksStepDefinition {
	
	@Before // execute before Scenario hooks.feature
	public void setUP()  {
	    System.out.println("Launch FF");
	    System.out.println("Enter URL for Free CRM APP");
	}
	@After // execute after Scenario hooks.feature
	public void tearDown()  {
	    System.out.println("Close the browser");
	    
	}
	
	@Given("^user is on deal page$")
	public void user_is_on_deal_page() throws Throwable {
		System.out.println("user is on deal page");
	}

	@When("^user fills the deals form$")
	public void user_fills_the_deals_form() throws Throwable {
		System.out.println("user fills the deals form");
	}

	@Then("^deals is created$")
	public void deals_is_created() throws Throwable {
		System.out.println("deals is created");
	}
	
	@Given("^user is on contact page$")
	public void user_is_on_contact_page() throws Throwable {
		System.out.println("user is on contact page");
	}

	@When("^user fills the contact form$")
	public void user_fills_the_contact_form() throws Throwable {
		System.out.println("user fills the contact form");
	}

	@Then("^contact is created$")
	public void contact_is_created() throws Throwable {
		System.out.println("contact is created");
	}
}
