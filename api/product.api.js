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


    app.put('/product', (req, res) => {
        db.collection('product').updateOne({ id: req.body.id }, {
                $set: {
                    name: req.body.name,
                    price: req.body.price,
                    imageUrl: req.body.imageUrl
                },
            }, (err, data) => {
                res.send(data);
            }) // update product set where productid='id'
    });


    // app.put('/product', (req, res) => {

    // });
}

module.exports = productApi;