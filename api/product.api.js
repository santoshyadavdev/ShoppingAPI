
var productApi = function (app) {

    app.post('/product', (req, res) => {
        console.log(req.body);
        res.status(201).send(req.body);
    });

}

module.exports = productApi;