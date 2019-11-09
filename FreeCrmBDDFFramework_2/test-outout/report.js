$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("G:/SeleniumProjects/FreeCrmBDDFramework/FreeCrmBDDFFramework_2/src/main/java/Features/hooks.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM app test",
  "description": "",
  "id": "free-crm-app-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 297900,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Free CRM create deal test",
  "description": "",
  "id": "free-crm-app-test;free-crm-create-deal-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is on deal page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user fills the deals form",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "deals is created",
  "keyword": "Then "
});
formatter.match({
  "location": "HooksStepDefinition.user_is_on_deal_page()"
});
formatter.result({
  "duration": 100913900,
  "status": "passed"
});
formatter.match({
  "location": "HooksStepDefinition.user_fills_the_deals_form()"
});
formatter.result({
  "duration": 120300,
  "status": "passed"
});
formatter.match({
  "location": "HooksStepDefinition.deals_is_created()"
});
formatter.result({
  "duration": 69500,
  "status": "passed"
});
formatter.after({
  "duration": 71000,
  "status": "passed"
});
formatter.before({
  "duration": 91900,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "free crm create contact test",
  "description": "",
  "id": "free-crm-app-test;free-crm-create-contact-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "user is on contact page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "user fills the contact form",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "contact is created",
  "keyword": "Then "
});
formatter.match({
  "location": "HooksStepDefinition.user_is_on_contact_page()"
});
formatter.result({
  "duration": 82300,
  "status": "passed"
});
formatter.match({
  "location": "HooksStepDefinition.user_fills_the_contact_form()"
});
formatter.result({
  "duration": 66200,
  "status": "passed"
});
formatter.match({
  "location": "HooksStepDefinition.contact_is_created()"
});
formatter.result({
  "duration": 68200,
  "status": "passed"
});
formatter.after({
  "duration": 54700,
  "status": "passed"
});
});