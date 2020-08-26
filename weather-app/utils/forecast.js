const axios = require("axios").default;
const environment = require("../environment/environment");

const getForecast = (lat,lng, cb) => {

    const url = `https://api.darksky.net/forecast/${environment.darkskyAPI}/${lat},${lng}`;

    axios.get(url)
        .then(response => {
            // console.log(response.data)
            const temperature = response.data.currently.temperature;
            const summary = response.data.daily.summary;
            cb(null, {temperature, summary});
        }).catch(err => cb(err));
}


module.exports = { getForecast}; 