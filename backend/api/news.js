const request = require('request');

const news = ((callback) => {
        url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=cd741f4a99764d76936a3b0ea1c01894';

        request({ url : url , json : true }, (error, response) => {
            if (error) {
                callback('Connection Issues', undefined) 
            } else if ( response.body.error ) {
                callback('Was not found', undefined)
            } else {
                callback(undefined, {
                    usaHeadlines : response.body.articles                      
                });
            }
        });
})

module.exports = news;