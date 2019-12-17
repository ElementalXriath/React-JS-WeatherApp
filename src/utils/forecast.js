const request = require('request');

const forecast = (latitude, longitude, callback) => {
        url =  'https://api.darksky.net/forecast/f32c3d0cdfaadac6417c8d35cd083a6e/'+ encodeURIComponent(latitude) +','+ encodeURIComponent(longitude) +'';

        request({ url : url , json : true }, (error, response) => {
            if (error) {
                callback('Connection Issues', undefined) 
            } else if ( response.body.error ) {
                callback('Was not found', undefined)
            } else {
                callback(undefined, {
                    currentTemp: response.body.currently.temperature,
                    currentRain: response.body.currently.precipProbability,
                    currentHumidity: response.body.currently.humidity,
                    currentSummary: response.body.currently.summary,
                    currentIcon: response.body.currently.icon,
                    currentWindSpeed: response.body.currently.windSpeed

                });
            }
        });
};

module.exports = forecast;
