const express = require("express");
const Todo = require("../model/todo.model");
const router = express.Router();

router.route("/")
    .get((req, res)=>{
        Todo.find().then(response => {
            return res.send(response).status(200)
        }).catch(err => {
            return res.send(err).status(501);
        })
        
    })
    .post((req, res)=>{})

router.route("/:id")
    .get((req, res) => {})
    .patch((req, res) => {})
    .delete((req, res) => {})

module.exports = router;