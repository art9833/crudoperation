const Product = require('../models/project.model');
// const multer = require('multer');
// const { exists } = require('../models/project.model');
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, './uploads');
//       },
//     filename: function (req, file, cb) {
//         cb(null, file.originalname);
//     }
// });

// const uploadImg = multer({storage: storage}).single('image');

//Simple version, without validation or sanitation
module.exports = {
    create: async (req, res, next) => {
        try{
            Product.collection.insertMany(req.body).then((result) => { 
                res.status(200).send('Product Inserted successfully')
              }).catch(err => {
                res.status(200).send(err);
              });   
        } catch (error) {
            console.log(error);
        }
    },
    read: async (req, res, next) => {
        Product.collection.find({}).toArray(function (err, product) {
            if (err) return next(err);
            res.send(product);
        });
    },
    update: async (req, res, next) => {
        Product.findByIdAndUpdate(req.params.id,
            {
                $set: req.body
            }, function (err, product) {
                if (err) return next(err);
                res.send('product Updated');
            });
    },
    delete: async (req, res, next) => {
        Product.findByIdAndRemove(req.params.id, function (err) {
            if (err) return next(err);
            res.send('Deleted successfully!');
        })
    }

}
