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
                    currentWindSpeed: response.body.currently.windSpeed,
                    lookAhead: response.body.minutely.summary,
                    dailySummary: response.body.daily.summary,
                    sundayTemp: response.body.daily.data[0].temperatureMax,
                    sundayTempLow: response.body.daily.data[0].temperatureLow,
                    sundayRain: response.body.daily.data[0].precipProbability,
                    sundayWind: response.body.daily.data[0].windSpeed,
                    mondayTemp: response.body.daily.data[1].temperatureMax,
                    mondayTempLow: response.body.daily.data[1].temperatureLow,
                    mondayRain: response.body.daily.data[1].precipProbability,
                    mondayWind: response.body.daily.data[1].windSpeed,
                    tuesdayTemp: response.body.daily.data[2].temperatureMax,
                    tuesdayTempLow: response.body.daily.data[2].temperatureLow,
                    tuesdayRain: response.body.daily.data[2].precipProbability,
                    tuesdayWind: response.body.daily.data[2].windSpeed,


                    


                });
            }
        });
};

module.exports = forecast;
