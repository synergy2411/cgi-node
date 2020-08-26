const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const app= express();
let items = [
    {id: 1, label : "read the book"},
    {id: 2, label : "pot the plant"},
    {id: 3, label : "renew insurance"},
    {id: 4, label : "but the pulses"}
]

router.use(bodyParser.json());


// http://localhost:9090/todos
router.route("/")
    .get((req, res)=>{
        console.log("URL : ", req.url);
        res.status(200).send({status : "success", items });
    })
    .post((req,res) => {
        if(req.body){
            const item = {id : items.length + 1, label : req.body.label};
            items.push(item)
            return res.status(201).send({status : "success", id : item.id});
        }
    })

// http://localhost:9090/todos/3
router.route("/:id")
    .get((req, res)=>{
        if(req.params && req.params.id){
            const {id} = req.params;
            const position = items.findIndex(item => item.id === Number(id))
            if(position >=0 ){
                return res.status(200).send({message : "success", item : items[position]})
            }
            return res.status(404).send({message : "Item not found"});
        }
    })
    .patch((req, res)=>{
        if(req.params && req.body){
            const { id } = req.params;
            const {  label } = req.body;
            const position = items.findIndex(item => item.id === Number(id));
            if(position >=0 ){
                items[position].label = label;
                return res.status(202).send({message : "success", item : items[position]});
            }
            return res.status(404).send({message : "Item not found"})
        }else{
            return res.send({message : "route param/label is not found in request"});
        }
    })
    .delete((req, res) => {
        if(req.params && req.params.id){
            const {id} = req.params;
            const newItems = items.filter(item => item.id !== Number(id));
            if(newItems.length === items.length){
                return res.status(404).send({message : "Item not found"})
            }
            const item = items.find(item => item.id === Number(id));
            items = [...newItems];
            res.status(201).send({message : "success", item })
        }
    })


app.use("/todos", router);

app.listen(9090, () => {
    console.log("Server is running...");
})



