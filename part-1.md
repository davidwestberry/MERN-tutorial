# MERN Tutorial - Part 1
In part 1 of the MERN tutorial, I will provide a brief explaination of the MERN stack and each of the 4 technologies involved in building a MERN application. I will also walk through a very basic web application. This first web app will not use all 4 technologies, it is intended only to gain a rudimentary understanding of a Node.js application

# M - E - R - N
When discussing application development, it is common to hear developers refer to various "stacks" that are used to build applications. A "stack" simply describes which tools and frameworks were used to build the application. The MERN "stack" uses **M**ongoDB as the databaase backend, **E**xpress as the server-side web framework, **R**eact as the front-end (or client-side) framework, and because Express is a Javascript framework, and Javascript is typically executed in the browser, we need some way to execute Javascript on a server. This is where **N**ode.js comes in.

# Node and Express
As mentioned above, Express is a web framework built for Node.js Your Express application will be responsible for listening for and responding to HTTP requests. Express can be used to build a web application that responds to requests by sending a web page, or it can be used to build API applications that respods to requests with simple data, typically in JSON format.

## Getting Started
To begin you will need to install Node.js and Express
### Install Node.js
Install instructions for Node.js for your operating system can be found by visiting [the official Node.js site](http://nodejs.org)\
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
Here I will break down what is happening line by line\
Let Node.js know that we will be using the Express library. Node.js uses the CommonJS module system, so `require` is built in to core Node.js. If you would like to learn more about `require` in Node.js, there is a [great knowledge article](https://nodejs.org/en/knowledge/getting-started/what-is-require/) on the Node.js site.
```javascript
const express = require('express');
```

In CommonJS, modules are defined and expose functions using `module.exports`. The Express library exports a default function which creates an Express instance that we will use to set routes and start the server. So on the next line, I simply invoke that default funciton to create an Express application.
```javascript
const app = express();
```

I then define a variable to store the port number, this step is optional, I could have simply hard-coded the value `3000` in the `app.listen` function call.
```javascript
const port = 3000;
```

In an express application, a simple way to define routes is to use `app.get()` for a route that responds to 'GET' requests, `app.post` for a route that responds to 'POST' requests, etc. So on the next line I tell the Express application to listen for HTTP GET requests at the root URL ('/') or _**route**_. So this simple app will respond with 'Hello World' when you make a request to the root URL of the application, and it will respond with a **404** error if you request any other URL or route.
The `app.get()` method requires at least 2 parameters, the first is the route or URL path to listen for requests on, the second is the function that will execute when a request is made to that route. In this example I used a simple Javascript anonymous function. The function that executes will have 2 parameters passed to it by the Express application framework: the [request object(`req`)](https://expressjs.com/en/4x/api.html#req) and the [response object(`res`)](https://expressjs.com/en/4x/api.html#res). The request object will have information from the HTTP request, including query parameters, headers passed with the request, and if this is a POST route, it will include any data sent in the body of the request.
```javascript
app.get('/', function(req, res){
    res.send('Hello World');
});
```
The route definitions can also take additional parameters for [middleware](https://expressjs.com/en/guide/using-middleware.html) functions before the function that will execute when a request is made to that route. We will discuss middleware more in a future post.\

The last line tells our Express app to start running and listen for requests on port 3000. Like the `app.get()` method, the `app.listen()` method takes some parameters as well. The first parameter is the port to listen on, the second is a function that will execute once our Express app has started and is actively listening for requests. Again, I just used an anonymous function, and log to the console that the server is ready for requests.
```javascript
app.listen(port, function() {
    console.log(`Example app listening on port ${port}`);
});
```

In order to keep this example simplistic for those who are familiar with JS but may not be up to date on the latest ES features, I used the older form of Javascript anonymous functions. You can also use a defined fuction (which we will do later) or, if you want to use an anonymous function, you can use the newer [Arrow Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) syntax for defining an anonymous function. I will be using this syntax for the remainder of these articles. Below is an example of the `app.get()` method call using Arrow Function syntax:
```javascript
app.get('/', (req, res) => {
    res.send('Hello World');
});