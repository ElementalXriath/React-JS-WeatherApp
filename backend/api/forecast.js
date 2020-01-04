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
                    current: response.body.currently,   
                    dailySummary: response.body.daily.summary,
                    dailyData: response.body.daily.data,
                    hourlyData: response.body.hourly.data                           
                });
            }
        });
};

module.exports = forecast;
