const axios = require("axios").default;

const getGeocode = (address, cb) => {
  // const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+address+"".json?access_token=pk.eyJ1Ijoic3luZXJneTI0MTEiLCJhIjoiY2p4NXc0cm53MDZoODQwbHFuNzdzMzV5NCJ9.DKIDo6bcG51yLXf2DmlYcQ"
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1Ijoic3luZXJneTI0MTEiLCJhIjoiY2p4NXc0cm53MDZoODQwbHFuNzdzMzV5NCJ9.DKIDo6bcG51yLXf2DmlYcQ`;

  axios
    .get(url)
    .then((response) => {
      // console.log(response);
      const lat = response.data.features[0].center[0];
      const lng = response.data.features[0].center[1];
      cb(null, { lat, lng });
    })
    .catch((err) => {
      cb(err);
    });
};

// getGeocode("delhi");

module.exports = { getGeocode };
