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

app.get('/', (req, res)=>{res.sendFile(process.cwd() + '/public/layout.html')})



// Command to run Server: nodemon ./server.js localhost 3000
http.createServer(app).listen(3000);
