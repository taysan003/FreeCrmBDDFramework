$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("G:/SeleniumProjects/FreeCrmBDDFramework/FreeCrmBDDFFramework/src/test/java/Features/login.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Login Feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "#Without Examples Keyword"
    },
    {
      "line": 4,
      "value": "#Scenario: Free CRM Login Test Scenario"
    },
    {
      "line": 5,
      "value": "#Given user is already on Login Page"
    },
    {
      "line": 6,
      "value": "#When title of login page is Free CRM"
    },
    {
      "line": 7,
      "value": "#Then user enters \"naveenk\" and \"test@123\""
    },
    {
      "line": 8,
      "value": "#Then user clicks on login button"
    },
    {
      "line": 9,
      "value": "#Then user is on home page"
    },
    {
      "line": 10,
      "value": "#Then browser is closed"
    },
    {
      "line": 13,
      "value": "#With Examples Keyword"
    }
  ],
  "line": 14,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "browser is closed",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 24,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;1"
    },
    {
      "cells": [
        "naveenk",
        "test@123"
      ],
      "line": 25,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;2"
    },
    {
      "cells": [
        "tom",
        "test456"
      ],
      "line": 26,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 25,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user enters \"naveenk\" and \"test@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "browser is closed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefenition.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 5649173452,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefenition.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 163606253,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "naveenk",
      "offset": 13
    },
    {
      "val": "test@123",
      "offset": 27
    }
  ],
  "location": "LoginStepDefenition.user_enters_username_and_user_enters_password(String,String)"
});
formatter.result({
  "duration": 162078548,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefenition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 2173098013,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefenition.user_is_on_home_page()"
});
formatter.result({
  "duration": 7407808,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefenition.browser_is_closed()"
});
formatter.result({
  "duration": 144286139,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user enters \"tom\" and \"test456\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "browser is closed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefenition.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 7634945687,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefenition.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 8742723,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tom",
      "offset": 13
    },
    {
      "val": "test456",
      "offset": 23
    }
  ],
  "location": "LoginStepDefenition.user_enters_username_and_user_enters_password(String,String)"
});
formatter.result({
  "duration": 378926917,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefenition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 330296754,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefenition.user_is_on_home_page()"
});
formatter.result({
  "duration": 12718232,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[CRMPRO]\u003e but was:\u003c[#1 Free CRM software in the cloud for sales and service]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat stepDefinitions.LoginStepDefenition.user_is_on_home_page(LoginStepDefenition.java:50)\r\n\tat ✽.Then user is on home page(G:/SeleniumProjects/FreeCrmBDDFramework/FreeCrmBDDFFramework/src/test/java/Features/login.feature:20)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDefenition.browser_is_closed()"
});
formatter.result({
  "status": "skipped"
});
});