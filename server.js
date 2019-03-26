const express = require('express');
const mongoose = require('mongoose');


const path = require('path');
global.__base = __dirname + '/';
const config = require(path.join(__base, 'config/config'));
const items = require(path.join(__base, 'routes/api/items'));

//init app
const app = express();

//init body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//mongodb config
const db = config.mongodbURI;

//Connect to mongoDB
mongoose
.connect(db)
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));

//Use Routes
app.use('/api/items', items);

//init server
const PORT = config.PORT || 5000
app.listen(PORT, () => console.log(`Express server is listenning on port ${PORT}`));