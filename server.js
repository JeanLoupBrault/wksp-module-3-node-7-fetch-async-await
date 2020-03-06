'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

//const { getDadJoke } = require('./handlers');
//const { getTronaldDump } = require('./handlers');
//const { getGeekJoke } = require('./handlers');

//const handleJoke = require('./handlers');
const handleXSubmit = (req, res) => {
    res.render('/jokes', {
        type: type
    })
}

const PORT = process.env.PORT || 8000;

express()
    .use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    })
    .use(morgan('dev'))
    .use(express.static('public'))
    .use(bodyParser.json())
    .use(express.urlencoded({ extended: false }))
    .set('view engine', 'ejs')

    // endpoints
    .post('/jokes', handleXSubmit)


    .listen(PORT, () => console.log(`Listening on port ${PORT}`));