#Feature: Fre CRM Create Contacts
#
#Scenario Outline: Free CRM Create a new contacts scenario
#
#Given user is already on Login Page
#When title of Login Page is Free CRM
#Then user enters "<username>" and "<password>"
#Then user clicks on login button
#Then user is on home page
#Then user user moves to new contact page
#Then user enters contact detailes "<firstname>" and "<lastname>" and "<position>"
#Then close the browser
#
#Examples:
#	| username | password | firstname | lastname | position |
#	| taysan   | Kostuchenko0 | Andrei| Ivanov   | dev 		|
#	| taysan   | Kostuchenko0 | Peter | Peter    | Manager  |  
