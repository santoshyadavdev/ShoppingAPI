var productApi = function(app, db) {
    app.get('/product', function(req, res) {
        db.collection('product').find().toArray(function(err, data) {
            res.send(data);
        });
    }); //select * from product

    app.get('/product/:id', (req, res) => {
        var id = parseInt(req.params.id);
        db.collection('product').find({ id: id }).toArray(function(err, data) {
            res.send(data);
        }); //select * from product where id= 'id'
    });

    app.post('/product', (req, res) => {
        db.collection('product').insert(req.body, (err, data) => {
                console.log(data.insertedCount);
                res.send(data);
            }) // insert into employee
    });

    // app.put('/product', (req, res) => {

    // });
}

module.exports = productApi;