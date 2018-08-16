$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("G:/SeleniumProjects/FreeCrmBDDFramework/FreeCrmBDDFFramework/src/test/java/Features/login.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Login Feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters username and user enters password",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefenition.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 6492232290,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefenition.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 206076607,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefenition.user_enters_username_and_user_enters_password()"
});
formatter.result({
  "duration": 244238020,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefenition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 2093768370,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefenition.user_is_on_home_page()"
});
formatter.result({
  "duration": 16643174,
  "status": "passed"
});
});