const express = require("express");
const geo = require("./utils/geocode");
const forecast = require("./utils/forecast");
const environment = require("./environment/environment");

const app = express();
const { PORT } = environment;

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
            forecast.getForecast(lat, lng, (err, {temperature, summary}) => {
                if(err){
                    return res.send(err);
                }
                return res.send({temperature, summary, address});
            })
        });
    }
})

app.listen(PORT, () => {
    console.log("Server started at Port " + PORT);
})