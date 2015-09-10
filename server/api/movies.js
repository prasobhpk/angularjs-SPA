'use strict';

module.exports = function (app) {
    var filePath = __dirname + '/' + 'marvel_movies.json';
    app.get('/api/movies', function (req, res) {
        res.send(app.readJsonFileSync(filePath));
    });

};
