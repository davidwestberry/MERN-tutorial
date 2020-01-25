// require the epxress library
const express = require('express');
// Create the express app
const app = express();
// Configure the port
const port = 3000;

// Set up the routes and methods used for requests to the routes
// The Hello World app will respond with 'Hello World' when a request is sent to the root application route '/'
// Meaning if you run this code locally, with 3000 set as the port number, a request to http://localhost:3000 will respond with 'Hello World'

// Define a method to respond to HTTP 'GET' requests made to the application's root level route
app.get('/', function(req, res){
    res.send('Hello World');
});

// Tell your express app to listen on the desired port
app.listen(port, function() {
    console.log(`Example app listening on port ${port}`);
});