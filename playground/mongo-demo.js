const mongo = require("mongodb");
const client = mongo.MongoClient;
let _db = null;
const url = "mongodb://localhost:27017"

const connect = () => {
    client.connect(url, {useUnifiedTopology: true }, (err, mongodb) => {
        if(err){
            process.exit(1);
        }
        console.log("Mongo connected!");
        _db = mongodb.db("cgi_db");
        // findAll();
        // findOne();
        // insertRecord();
        // deleteRecord();
        // updateRecord()

        // mongodb.close();
    })
}

connect();

// UPDATE
const updateRecord = () => {
    _db.collection("todos").updateOne(
        {"status" : false}, 
        {$set : {"label" : "Buy the pulses"}}),
        (err, result)=>{
            if(err) console.log(err);
            console.log("UPDATED - ", result);
        }

}

// DELETE
const deleteRecord = () => {
    _db.collection("todos").deleteOne({"status" : true}, (err, result) => {
        if(err) console.log(err);
        console.log(result);
    })
}

// CREATE
const insertRecord = () =>{
    _db.collection("todos").insertOne({
        "label" : "buy the pulses", "status" : false
    }, (err, result) => {
        if(err) console.log(err);
        console.log(result.ops);
    })
}


// READ
const findAll = () => {
    _db.collection("todos").find().toArray((err, docs) => {
        if(err) console.log(err);
        console.log(docs);
    })
}

const findOne = () => {
    _db.collection("todos").find({"label": "buy the pulses"}).toArray((err, docs) => {
        if(err) console.log(err);
        console.log(docs);
    })
}





