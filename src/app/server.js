//Install express server
const express = require('express');
const path = require('path');

const app = express();


//Serve only the static files form the dist directory
app.use(express.static("./dist/angular-app-name/"));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/*", (req, res) =>
  res.sendFile("index.html", { root: "dist/angular-app-name/" })
);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT);
