'use strict';

var _ = require('lodash');
var express = require('express');
var fs = require('fs');
var morgan = require('morgan');
var path = require('path');
var config = require('./config');
var bodyParser = require('body-parser');
var multer = require('multer');
var globule = require('globule');
var colors = require('colors');

var app = express();
var upload = multer();

app.set('config', config);

app.readJsonFileSync = function (filepath, encoding) {
    if (typeof (encoding) == 'undefined') {
        encoding = 'utf8';
    }
    var file = fs.readFileSync(filepath, encoding);
    return JSON.parse(file);
};

app.use(morgan('combined', {
    skip: _.identity.bind(null, app.settings.env === 'dev')
}));

express.static.mime.define({
    'application/x-font-woff': ['woff'],
    'application/x-font-ttf': ['ttf'],
    'application/vnd.ms-fontobject': ['eot'],
    'font/opentype': ['otf'],
    'text/css': ['css']
});

app.use(express.static(path.resolve(__dirname, config.appBase), {
    maxAge: 0
}));

// for parsing application/json
app.use(bodyParser.json());

// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));
//app.use(multer()); // for parsing multipart/form-data

function handleErrors(err, res) {
    if (err) {
        res.status(500);
        if (err.code === 'ENOENT') {
            res.status(404);
        }
        res.end();
    }
    return err;
}

if (config.useSpecificApi === true) {
// Serve specific Development API mocks
    var devApis = config.api.split(',');
    _.map(devApis, function (file) {
        require(path.join(process.cwd(), file))(app);
    });
} else {

// Serve All Development API mocks
    _.map(globule.find({
        src: '**/*.js',
        srcBase: 'api',
        prefixBase: true
    }), function (file) {
        require(path.join(process.cwd(), file))(app);
    });
}

// Return index.html
app.get('/', function (req, res) {
    res.set('Pragma', 'no-cache');
    res.set('Cache-Control', 'no-cache');

    fs.readFile(
        config.appBase + '/index.html',
        function (err, data) {
            res.setHeader('Content-Type', 'text/html');
            if (handleErrors(err, res)) {
                return;
            }
            res.end(data);
        }
    );
});

var server = app.listen(config.port);
console.log(colors.gray('Listening on port ' + config.port + ' - ' + app.settings.env + ' mode'));

