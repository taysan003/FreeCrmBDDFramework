$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("G:/SeleniumProjects/FreeCrmBDDFramework/FreeCrmBDDFFramework/src/test/java/Features/deals.feature");
formatter.feature({
  "line": 1,
  "name": "Deal data creation",
  "description": "",
  "id": "deal-data-creation",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Free CRM create a new deal scenario",
  "description": "",
  "id": "deal-data-creation;free-crm-create-a-new-deal-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "comments": [
    {
      "line": 6,
      "value": "#BDD approche"
    }
  ],
  "line": 7,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user enters username and password",
  "rows": [
    {
      "cells": [
        "naveenk",
        "test@123"
      ],
      "line": 10
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user moves to new deal page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user enters deal details",
  "rows": [
    {
      "cells": [
        "test deal",
        "1000",
        "50",
        "10"
      ],
      "line": 16
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 17,
      "value": "#test data"
    }
  ],
  "line": 18,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "DealStepDefinition.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 5540881992,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefinition.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 10989832,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefinition.user_enters_username_and_user_enters_password(DataTable)"
});
formatter.result({
  "duration": 149778627,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 1593238358,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 8236250,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefinition.user_moves_to_new_contact_page()"
});
formatter.result({
  "duration": 707272576,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefinition.user_enters_contacts_details(DataTable)"
});
formatter.result({
  "duration": 329708772,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 694254101,
  "status": "passed"
});
});