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
    .get((req, res) => {
        if(req.params){
            const _id = req.params.id;
            Todo.findById(_id)
                .then(response => {
                    return res.send(response).status(200);
                }).catch(err => {
                    return res.send(err).status(404);
                })
        }
    })
    .patch((req, res) => {
        if(req.params && req.body){
            const _id = req.params.id;
            Todo.findByIdAndUpdate(_id,{...req.body})
            .then(response =>{
                return res.send(response).status(202);
            }).catch(err => {
                return res.status(404).send(err);
            })
        }
    })
    .delete((req, res) => {
        if(req.params){
            const _id = req.params.id;
            Todo.findByIdAndDelete(_id)
                .then(response => {
                    return res.send(response).status(200);
                }).catch(err => {
                    return res.send(err).status(404);
                })
        }
    })

module.exports = router;