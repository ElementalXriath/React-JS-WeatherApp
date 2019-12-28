const request = require('request');

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiZWxlbWVudGNvZGluZzMwMCIsImEiOiJjazNkOXMzankxN3UwM3BvY2k3eG12bDN2In0.31SC2OfrIT3Cbi1FNPXedg&limit=1';

    request({ url : url, json : true }, (error, response) => {
        if (error) {
            callback('error', undefined)
        } else if ( response.body.features.length === 0 ) {
            callback('error', undefined)
        } else {
            callback(undefined, {
               latitude: response.body.features[0].center[1],
               longitude: response.body.features[0].center[0],
               location: response.body.features[0].place_name
            });
        }
    });
};

module.exports = geocode;