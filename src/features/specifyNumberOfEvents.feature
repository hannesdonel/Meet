Feature: Specify number of events

Scenario: When user hasn’t specified a number, 32 is the default number

Given a list of events
When the user hasn’t specified a number
Then a maximum of 32 events gets displayed

Scenario: User can change the number of events they want to see

Given a list of events
When the user changes the number of events to be displayed
Then a maximum by that number of events will be shown