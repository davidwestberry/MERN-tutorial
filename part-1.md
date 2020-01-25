# MERN Tutorial - Part 1
In part 1 of the MERN tutorial, I will provide a brief explaination of the MERN stack and each of the 4 technologies involved in building a MERN application. I will also walk through a very basic web application. This first web app will not use all 4 technologies, it is intended only to gain a rudimentary understanding of a Node.js application

# M - E - R - N
When discussing application development, it is common to hear developers refer to various "stacks" that are used to build applications. A "stack" simply describes which tools and frameworks were used to build the application. The MERN "stack" uses **M**ongoDB as the databaase backend, **E**xpress as the server-side web framework, **R**eact as the front-end (or client-side) framework, and because Express is a Javascript framework, and Javascript is typically executed in the browser, we need some way to execute Javascript on a server. This is where **N**ode.js comes in.

# Node and Express
As mentioned above, Express is a web framework built for Node.js Your Express application will be responsible for listening for and responding to HTTP requests. Express can be used to build a web application that responds to requests by sending a web page, or it can be used to build API applications that respods to requests with simple data, typically in JSON format.

## Getting Started
To begin you will need to install Node.js and Express
### Install Node.js
Install instructions for Node.js for your operating system can be found by visiting [the official Node.js site](http://nodejs.org)
Once you have Node.js installed, you can use the Node.js package manager **npm** to install Express. There are other package managers for Node.js, but npm is the offical package manager distributed with Node.js and is what I will be using throughout this tutorial.

### Install Express
Create a directory on your computer that you would like to use for your web app. Using your favorite terminal application go ahead and open the directory you just created
```bash
mkdir myapp
cd myapp
```
Use **npm init** to create a [package.json](https://docs.npmjs.com/files/package.json) file and initialize the directory as a Node.js application. When you execute **npm init** you will be prompted for several additoinal pieces of information like the application name and version number
```bash
npm init
```
To install packages using npm you can simply execute `npm install [package_name]`. If you add the `--save` argument, the package will also be added to the `dependencies` section of you package.json file. So install Express by running the following command:
```bash
npm install express --save
```

### Create Your First Express Application
A basic Express app can be broken into 5 parts:
1. `require` the express library
1. Create the express app
1. Configure the port that will be used
1. Set up the routes and the methods that will execute when a request is made to each route
1. Tell your express app to start listening on the configured port
#### The cliche 'Hello World'
In the directory that you created above, create a new file called 'index.js' and add the following code.
```javascript
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
```
Now if you run `node index.js` you should see output like `Example app listening on port 3000`. And if you open your browser and navigate to http://localhost:3000, you should see a blank page with **Hello World** at the top.

## Hello World Code Breakdown
