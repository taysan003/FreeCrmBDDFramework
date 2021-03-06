@FunctionalTest
Feature: Free CRM application testing


@smokeTest @RegressionTest
Scenario: Login with correct username and corrcet password
Given This is a valid login test

@smokeTest @End2End
Scenario: Login with incorrect username and corrcet password
Given This is a invalid login test

@smokeTest
Scenario: Create a contact
Given This is a contact test case

@RegressionTest
Scenario: Create a deal
Given This is a deal test case

@smokeTest @End2End
Scenario: Create a task
Given This is a task test case

@RegressionTest
Scenario: Create a case
Given This is a case test case

@smokeTest
Scenario: Verify a left panel links
Given Clicking on left panel links

@RegressionTest
Scenario: Search a deal
Given This is a search deal test

@smokeTest @End2End
Scenario: Search a contact
Given This is a search contact test

@RegressionTest
Scenario: Search a case
Given This is a search case test

@smokeTest @End2End
Scenario: Search a task
Given This is a search task test

@smokeTest @RegressionTest
Scenario: Search a call
Given This is a search call test

@RegressionTest
Scenario: Search a email
Given This is a search email test

@smokeTest @RegressionTest
Scenario: Search a docs
Given This is a search docs test

@smokeTest @End2End
Scenario: Search a forms
Given This is a search forms test

@End2End
Scenario: Validate report
Given This is a report test

@End2End
Scenario: Application logout
Given This is a logout test


Scenario: Browser closed
Given This is a close browser test