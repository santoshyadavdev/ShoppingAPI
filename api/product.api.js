var productApi = function(app, db) {
    app.get('/product', function(req, res) {
        db.collection('product').find().toArray(function(err, data) {
            res.send(data);
        });
    }); //select * from product

    //for server side pagination
    app.get('/product/:offset&:size', function(req, res) {
        console.log(req.params);
        var offset = parseInt(req.params.offset);
        var size = parseInt(req.params.size);

        db.collection('product').find().skip(offset).limit(size).toArray(function(err, data) {
            res.send(data);
        });
    }); //select * from product skip = 'offset' and size  = 'size'


    app.get('/product/:id', (req, res) => {
        var id = parseInt(req.params.id);
        db.collection('product').findOne({ id: id }, (err, data) => {
            res.send(data);
        })
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