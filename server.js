//Install express server
const express = require('express');
const path = require('path');

const app = express();

app.use(cors());

// Serve only the static files form the dist directory
app.use(express.static("./dist/crypto-two"));

app.get("/*", (req, res) =>
  res.sendFile("index.html", { root: "dist/crypto-two/" })
);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);

//garbage
