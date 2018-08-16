$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("G:/SeleniumProjects/FreeCrmBDDFramework/FreeCrmBDDFFramework/src/test/java/Features/contacts.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Create Contacts",
  "description": "",
  "id": "free-crm-create-contacts",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Free CRM create a new scenario",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-create-a-new-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
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
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
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
formatter.step({
  "line": 10,
  "name": "user moves to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters contact ditails \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\" and \"\u003cposition\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-create-a-new-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "firstname",
        "lastname",
        "position"
      ],
      "line": 15,
      "id": "free-crm-create-contacts;free-crm-create-a-new-scenario;;1"
    },
    {
      "cells": [
        "naveenk",
        "test@123",
        "Tom",
        "Peter",
        "Manager"
      ],
      "line": 16,
      "id": "free-crm-create-contacts;free-crm-create-a-new-scenario;;2"
    },
    {
      "cells": [
        "naveenk",
        "test@123",
        "David",
        "Dsoux",
        "Director"
      ],
      "line": 17,
      "id": "free-crm-create-contacts;free-crm-create-a-new-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "Free CRM create a new scenario",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-create-a-new-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
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
  "name": "user enters \"naveenk\" and \"test@123\"",
  "matchedColumns": [
    0,
    1
  ],
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
formatter.step({
  "line": 10,
  "name": "user moves to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters contact ditails \"Tom\" and \"Peter\" and \"Manager\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefenition.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 6116035647,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefenition.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 129422325,
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
  "duration": 176213473,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefenition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 1279971382,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefenition.user_is_on_home_page()"
});
formatter.result({
  "duration": 7068845,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefenition.user_moves_to_new_contact_page()"
});
formatter.result({
  "duration": 798742359,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tom",
      "offset": 29
    },
    {
      "val": "Peter",
      "offset": 39
    },
    {
      "val": "Manager",
      "offset": 51
    }
  ],
  "location": "LoginStepDefenition.user_enters_contact_ditails_firstname_and_user_enters_lastname_and_position(String,String,String)"
});
formatter.result({
  "duration": 1133882970,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefenition.close_the_browser()"
});
formatter.result({
  "duration": 2318122127,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Free CRM create a new scenario",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-create-a-new-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
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
  "name": "user enters \"naveenk\" and \"test@123\"",
  "matchedColumns": [
    0,
    1
  ],
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
formatter.step({
  "line": 10,
  "name": "user moves to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters contact ditails \"David\" and \"Dsoux\" and \"Director\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefenition.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 4454493989,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefenition.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 9671514,
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
  "duration": 370845923,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefenition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 1437276395,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefenition.user_is_on_home_page()"
});
formatter.result({
  "duration": 7113092,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefenition.user_moves_to_new_contact_page()"
});
formatter.result({
  "duration": 919496233,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "David",
      "offset": 29
    },
    {
      "val": "Dsoux",
      "offset": 41
    },
    {
      "val": "Director",
      "offset": 53
    }
  ],
  "location": "LoginStepDefenition.user_enters_contact_ditails_firstname_and_user_enters_lastname_and_position(String,String,String)"
});
formatter.result({
  "duration": 1187145234,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefenition.close_the_browser()"
});
formatter.result({
  "duration": 146821647,
  "status": "passed"
});
});