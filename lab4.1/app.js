var express = require("express");
var app = express();

app.listen(3000);

app.get("/html", (req, res) => {
  res.send("<html></html><head></head><body><h1>Hello World!</h1></body>");
});

app.get("/json", (req, res) => {
  res.send({ fname: "John", lname: "Smith" });
});

app.get("/toronto+team", (req, res) => {
  res.send("<html></html><head></head><body><h1>Go Toronto</h1></body>");
});

app.get("/toronto*team", (req, res) => {
  res.send("<html></html><head></head><body><h1>Go Toronto Team</h1></body>");
});
