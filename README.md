# Go Out with me

This is an application that provides you information on events in a specific town. You are in advance able to sync events you'd like to visit with your personal calendar.

## Technologies

--

## Functionality

**<ins>Feature 1: Filter Events by City</ins>**

As a **user**
I should be **able to “filter events by city”**
So that **I can see the list of events that take place in that city**

<ins>*Scenario 1:</ins> When user hasn’t searched for a city, show upcoming events from all cities.*

**Given** user hasn’t searched for any city
**When** the user opens the app
**Then** the user will see a list of all upcoming events

   <ins>*Scenario 2:</ins> User should see a list of suggestions when they search for a city.*  
   **Given** the main page is open  
   **When** user starts typing in the city textbox  
   **The**n the user will see a list of cities (suggestions) that match what they’ve typed  

   <ins>*Scenario 3:</ins> User can select a city from the suggested list.*  
   **Given** the user was typing “Berlin” in the city textbox and the list of suggested cities is showing  
   **When** the user selects a city (e.g., “Berlin, Germany”) from the list  
   **Then** their city will change to that city (i.e., “Berlin, Germany”) and the user will receive a list of upcoming events   in that city

<ins>**Feature 2: Show/hide an event's details**</ins>
As a **user**
I should be able to **show and hide an event’s details**
So that **I can see more information on an event if I’d like to**

   <ins>*Scenario 1:</ins> An event element is collapsed by default*  
   **Given** anywhere in the app where a list of events appeared  
   **When** the user is looking at that list  
   **Then** all elements of the corresponding list are going to be collapsed by default  

   <ins>*Scenario 2:</ins> User can expand an event to see its details*  
   **Given** anywhere in the app where a list of events appeared  
   **When** the user clicks on a specific event  
   **Then** only that element is going expand to reveal its details  

   <ins>*Scenario 3:</ins> User can collapse an event to hide its details*  
   **Given** an expanded element  
   **When** the user clicks on that expanded element  
   **Then** it’s going collapse and hide its details.  

<ins>**Feature 3: Specify number of events**</ins>
As a **user**
I should be able **to specify the number of displayed events**
So that **I won’t be distracted by an overloaded view**

   <ins>*Scenario 1:</ins> When user hasn’t specified a number, 32 is the default number*  
   **Given** a list of events  
   **When** the user hasn’t specified a number  
   **Then** a maximum of 32 events gets displayed  

   .<ins>*Scenario 2:</ins> User can change the number of events they want to see*  
   .**Given** a list of events  
   .**When** the user changes the number of events to be displayed  
   .**Then** a maximum by that number of events will be shown  

<ins>**Feature 4: Use the app when offline**</ins>
As a **user**
I should be able to **use the app when offline**
So that **I can still use the app with a interrupted internet connection**

   <ins>*Scenario 1:</ins> Show cached data when there’s no internet connection*  
   **Given** anywhere in the application  
   **When** the user wants to display an event  
   **Then** a cached version of that event is being displayed  

   <ins>*Scenario 2:</ins> Show error when user changes the settings (city, time range)*  
   **Given** a search for events by city and time  
   **When** the user changes the values for either city or time  
   **Then** an error will be thrown that its not possible to fetch new data without an internet connection  

<ins>**Feature 5: Data visualization**</ins>
As a **user**
I should be able to **see a well visualised version of all data being displayed**
So that **is always convenient to retrieve information**

   <ins>*Scenario 1:</ins> Show a chart with the number of upcoming events in each city*  
   **Given** the user just logged in  
   **When** the start view gets displayed  
   **Then** the user should see how much events are going to take place in each city  

