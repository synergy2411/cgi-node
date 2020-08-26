const axios = require("axios").default;

const getForecast = (lat,lng, cb) => {

    const url = `https://api.darksky.net/forecast/473fe696d21e65026547b2d50b56014c/${lat},${lng}`;

    axios.get(url)
        .then(response => {
            // console.log(response.data)
            const temperature = response.data.currently.temperature;
            const summary = response.data.daily.summary;
            cb(null, {temperature, summary});
        }).catch(err => cb(err));
}


module.exports = { getForecast}; 