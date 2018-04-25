var path = require('path')

module.exports = function (app) {
    // Home Page Route //
    app.get('/', function(req, res){
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
    
    // Survey Route //
    app.get('/survey', function(req, res){
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    // Sends to Home Page if any other route entered //
    app.use(function(req, res){
        res.sendFile(path.join(__dirname + '../public/home.html'));
    });
}
