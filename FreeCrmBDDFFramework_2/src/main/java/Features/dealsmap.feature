Feature: Deal data creation

Scenario: Free CRM Cration a new deal scenario

Given user is already on Login Page
When title of Login Page is Free CRM
Then user enters username and password
| username   | password     |
| taysan     | Kostuchenko0 |

Then user clicks on login button
Then user is on home page
Then user user moves to new deal page
Then user enters deals details
| title     | amount | probability | commission |
| test deal |   1000 |          50 |         10 |
| test dea2 |   2000 |          60 |         10 |
| test dea3 |   3000 |          70 |         10 |


Then close the browser

 