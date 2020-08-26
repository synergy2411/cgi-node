const express = require("express");
const geo = require("./utils/geocode");

const app = express();

app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/public/index.html");
})

app.get("/weather", (req, res) => {
    if(req.query){
        const {address} = req.query;
        geo.getGeocode(address, (err, {lat, lng}) => {
            if(err){
                return res.send("Some Problem.", err)
            }
            console.log(lat,lng)
        });
        return res.send("API Hit");
    }
})

app.listen(9000, () => {
    console.log("Server started at Port 9000...");
})