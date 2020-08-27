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
    .post((req, res)=>{
        if(req.body){
            const todo = new Todo({...req.body});
            todo.save().then(response => {
                return res.send(response).status(201);
            }).catch(err => {
                return res.send(err).status(501);
            })
        }
    })

router.route("/:id")
    .get((req, res) => {})
    .patch((req, res) => {})
    .delete((req, res) => {})

module.exports = router;