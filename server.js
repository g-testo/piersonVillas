'use strict';

var express = require('express');
var sass = require('node-sass');
var sassMiddleware = require('node-sass-middleware');
var http = require('http');
var app = express();
var path = require('path');

app.use(sassMiddleware({
        src: __dirname + '/public/sass',
        dest: __dirname + '/public/stylesheets',
        debug: true,
        outputStyle: 'compressed',
        prefix:  '/stylesheets'  // Where prefix is at <link rel="stylesheets" href="prefix/style.css"/>
      }));
      
// view engine setup
app.set('./public', path.join(__dirname, './public'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.static("public"));

app.get('/', (req, res)=>{res.sendFile(process.cwd() + '/public/layout.html')});


// angular routing refreshing issue fix after removing # 
app.use(function(req, res) {
    res.sendFile(__dirname + '/public/layout.html');
});

// Command to run Server: nodemon ./server.js

http.createServer(app).listen(process.env.PORT, process.env.IP);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;