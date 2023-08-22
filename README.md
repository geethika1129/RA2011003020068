# Train Schedule App
# Backend

Develop an API to display all trains in the next 12 hours with their seat availability & pricing.

As a developer, you have received pilot access to the APIs of John Doe Railways. Using the APIs provided by the server, develop an API that displays the real-time train schedule of all trains in the next 12 hours.

Display real-time train schedules of all trains along with seat availability, prices

User shouldn't be asked to register to view the train schedules from your server

You are free to use any backend framework of your choice.

Each train contains seat availability and prices for 2 train coach types - sleeper and AC

Trains departing in the next 30 minutes should be ignored.
Trains should be displayed in the ascending order of price, descending order of tickets and descending order of departure time(after considering delays in minutes)

• The prices, seatsAvailability of all tickets are subject to change based on market conditions such as demand, supply, departure time.

• The response given to the user has to be ordered based on the current values of the above three values.

Trains that fulfil the allowed time window after delays should also be included in the API response
Access to the APIs requires you to register your company

Access Code will be available in the email you would have received

APIs to obtain data of all trains or a specific train require an authentication token

API calls to the server are chargeable (number of calls to the Railway server has to be minimised)

API server built by you has to be performant providing users a timely and effective response in the shortest possible time

You are expected to handle the evolution in the train data

# Frontend


Develop a React based Frontend Web Application to display the Trains Schedule

Build a responsive React based Frontend Web App to display the Trains Schedule

Your application must contain 2 pages, one for displaying all trains and one for displaying a single train and both pages must fulfil all the specifications

Your frontend application should consume the backend API that you have built and not the API provided by the John Doe Railways Server.

You need to use any CSS library of your choice such as Material UI (preferred), Tailwind CSS, Bootstrap, etc. Not using a CSS library or using native CSS only will be scored lower

UI must consider the user experience and ensure you prominently display train delays, expensive and cheap trains, seat availability and train coach class

## Display all trains available

![Screenshot (65)](https://github.com/geethika1129/RA2011003020068/assets/83590629/a124ad87-70a2-4ba8-a042-71c7c1d7a9f3)

## Search for trains

![Screenshot (64)](https://github.com/geethika1129/RA2011003020068/assets/83590629/b6a75a1a-54ae-4f65-b473-f989bf2547be)
