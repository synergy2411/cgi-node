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
    .post((req,res) => {})

// http://localhost:9090/todos/3
router.route("/:id")
    .get((req, res)=>{})
    .patch((req, res)=>{})
    .delete((req, res) => {})


app.use("/todos", router);

app.listen(9090, () => {
    console.log("Server is running...");
})