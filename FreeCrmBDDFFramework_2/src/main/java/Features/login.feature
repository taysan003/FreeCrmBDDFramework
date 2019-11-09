#Feature: Free CRM Login Feature

#Scenario Outline: Free CRM Login Test Scenario

#Given user is already on Login Page
#When title of Login Page is Free CRM
#Then user enters "<username>" and "<password>"
#Then user clicks on login button
#Then user is on home page
#Then close the browser

#Examples:
#	| username | password |
#	| taysan   | Kostuchenko0 |
#	| tom      | tes347|

#Scenario: Free CRM Login Test Scenario

#Given user is already on Login Page
#When title of Login Page is Free CRM
#Then user enters "taysan" and "Kostuchenko0"
#Then user clicks on login button
#And user is on home page



#Scenario: user is able to create a new contact

#Given user is already on homepage
#When user mouse over on contacts link
#Then user clicks on New Contact link
#Then user enters firstname and lastname
#Then user clicks on save button 
#Then verify new contact created  