//Install express server
// const cors=require("cors");
// const corsOptions ={
//    origin:'*',
//    credentials:true,            //access-control-allow-credentials:true
//    optionSuccessStatus:200,
// }

// app.use(cors(corsOptions)) // Use this after the variable declaration

const express = require('express');
var cors = require("cors");
const path = require('path');

const app = express();

app.options('*', cors()) // include before other routes

var whitelist = [
  "https://newsapi.org/v2/everything?q=bitcoin&apiKey=",
];
var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (whitelist.indexOf(req.header("Origin")) !== -1) {
    corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false }; // disable CORS for this request
  }
  callback(null, corsOptions); // callback expects two parameters: error and options
};

// Serve only the static files form the dist directory
app.use(express.static("./dist/angular-app-name"));

app.get("/*", (req, res) =>
  res.sendFile("index.html", { root: "dist/angular-app-name/" })
);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080, function() {
  console.log('CORS-enabled web server listening on port 8080')
});
