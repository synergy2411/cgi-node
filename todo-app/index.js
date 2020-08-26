const express = require("express");
const todoRouter = require("./todos/todo.router");
const bookRouter = require("./books/books.router");
const app= express();

app.use("/todos", todoRouter.router);
app.use("/books", bookRouter.router);

app.listen(9090, () => {
    console.log("Server is running...");
})



