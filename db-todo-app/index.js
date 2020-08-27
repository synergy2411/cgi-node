const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("./db/mongoose");
const todoRouter = require("./route/todo.router");


const app = express();

app.use(bodyParser.json());

app.use("/todos", todoRouter);

app.listen(9090, () => {
    console.log("Server started at port 9090");
})
