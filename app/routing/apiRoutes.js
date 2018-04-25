var friendsData = require('../data/friends.js');

module.exports = function (app) {
    // Adds user to the FriendsData Array //
    app.post('/api/friends', function(req, res){
        friendsData.push(req.body);
        res.json(true);
    })
}