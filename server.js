'use strict';

var express = require('express');
var sass = require('node-sass');
var sassMiddleware = require('node-sass-middleware');
var http = require('http');
var app = express();

app.use(sassMiddleware({
        src: __dirname + '/public/sass',
        dest: __dirname + '/public/stylesheets',
        debug: true,
        outputStyle: 'compressed',
        prefix:  '/stylesheets'  // Where prefix is at <link rel="stylesheets" href="prefix/style.css"/>
      }));

app.use(express.static("public"));

app.get('/', (req, res)=>{res.sendFile(process.cwd() + '/public/layout.html')});



// Command to run Server: nodemon ./server.js

http.createServer(app).listen(process.env.PORT, process.env.IP);

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
})