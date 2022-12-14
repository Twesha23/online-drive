# WeatherBot

WeatherBot takes input like (Weather, Temperature, Minimum Temp, Maximum Temp, Sunrise time, sunset time, Feels like,) followed by city name and gives you output by forecasting the weather of that particular city from Weatherbit and openWeather API

## Technology and Platform

> Fulfillment has been done in Node.js

> For intent recognition Dialogflow is used.


## Installation Steps
To access this bot, Google Cloud Service account is needed.

1. Open test.js file
2. In terminal create a port with nodemon
   > Command goes here
3. Create a server using ngrok
   > Command goes here
4. In DialogFlow Agent > Create agent > train agent > Enable for webhook
(In agent training, a city named parameter should be defined - Entity=sys.geo.city)
5. Fulfillment > Webhook enable
6. Enter URL which we got from NGrok Forwarding URL followed by '/webhook'
7. Save
Done! your chatbot should be working.

The proccess should be like this,
Your chat interface will take input of city name
DialogFlow will get the intent by training phrases
Dialogflow will send the intent data in webhook
In JS file, IntentMap will map the intent to the attached function
In function, API gets called,
We get json data in API
Which is further transfered to agent
That directly goes to the Dialogflow chat from bot side, 
with help of Webhook, NGrok and Nodemon.

