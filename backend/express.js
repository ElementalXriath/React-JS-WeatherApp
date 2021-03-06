const express = require('express');

// GeoCoding - Forecast - DarkSky Api
const forecast = require('./api/forecast');
const geocode = require('../backend/utils/geocode');
const news = require('./api/news');

const app = express();

// - > Set Full Header Access
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

app.get('/weather', (req, res) => {

    if (!req.query.address) {
        return res.send({
            error: 'Enter Address'
        })
    } 
    geocode(req.query.address, (error, {latitude, longitude, location}) => {
        if (error) {
            return res.send({error})
        }
        forecast(latitude, longitude, (error, forecastData) =>{
            if(error){
                return res.send({error})
            }
            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })
        })
    })
});

app.get('/news', (req, res) => {
    news((error, usaNews) => {
        if (error) {
            return res.send({error})
        }
        res.send({
            usNews: usaNews
        })
    })
}) 

app.get('*', (req, res) => {
    res.send("404 Error")
});

// Port Listen 3000- Local
app.listen(3000, () => {
    console.log('Server Started')
});