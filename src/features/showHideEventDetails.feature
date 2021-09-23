Feature: Show/hide an event's details

Scenario: An event element is collapsed by default

Given anywhere in the app where a list of events appeared
When the user is looking at that list
Then all elements of the corresponding list are going to be collapsed by default

Scenario: User can expand an event to see its details

Given anywhere in the app where a list of events appeared
When the user clicks on a specific event
Then only that element is going expand to reveal its details

Scenario: User can collapse an event to hide its details

Given an expanded element
When the user clicks on that expanded element
Then it’s going collapse and hide its details.