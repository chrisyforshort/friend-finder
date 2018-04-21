module.exports = function (app) {
    var answersArr = []

    app.get('/api/friends', function(req, res){
        res.send('hi')
    })

    app.post('/api/friends', function(req, res){
        answersArr(req.body)
        res.json(answersArr.length)
    })
}