// http Server - Express
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended : true}));

let todos = [
  { id: 1, label: "buy the pulses" },
  { id: 2, label: "pot the plants" },
  { id: 3, label: "renew bike insurance" },
];

app.get("/", (request, response) => {
  //   response.send("Hello from express server.");
  response.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/todos", (req, res) => {
  res.send(todos);
});

// npm install body-parser --save
app.post("/todos/new", (req, res) => {
  if (req.body) {
    const todo = { id: todos.length + 1, label: req.body.todo };
    todos.push(todo);
    // res.redirect("/todos")
    res.send(todo);
  }
});

app.get("/todos/new", (req, res) => {
  if (req.query) {
    const todo = { id: todos.length + 1, label: req.query.todo };
    todos.push(todo);
    // res.redirect("/todos")
    res.send(todo);
  }
});

// http://localhost:9090/todos/2

app.get("/todos/:id", (req, res) => {
  if (req.params) {
    const { id } = req.params;
    const position = todos.findIndex((todo) => todo.id === +id);
    res.send(todos[position]);
  }
});

app.listen(9090, () => {
  console.log("Express server is running on Port 9090...");
});

// npm install express --save

// Ctrl + c
// node server.js

// npm install nodemon -g
