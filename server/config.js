'use strict';
//var appSrc = '../build/development/app';
var appSrc = '../build/production/app';
module.exports = {
    session_secret: 'secret',
    port: 3000,
    useSpecificApi: false,
    appBase: appSrc,
    api: 'api/alertInfo.js'
};
