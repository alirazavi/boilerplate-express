var express = require('express');
var app = express();

// Normal usage
app.use(express.static(__dirname + "/public"));

// Assets at the /assets route
app.use("/assets", express.static(__dirname + "/public"));


app.get("/json", (req, res) => {
 res.json({
  message: "Hello json"
 });
});


app.get("/", function(req, res) {
 res.sendFile(__dirname + "/views/index.html");
});


app.get("/", (req, res) => {
 res.send("Hello Express");
});



console.log("Hello World");


