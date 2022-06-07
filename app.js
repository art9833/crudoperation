const express = require('express');
const bodyParser = require('body-parser');

const crudOperation = require('./routes/crud.route'); // Imports routes for the products
const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
const res = require('express/lib/response');
const connect = async () => {
    try {
      await mongoose.connect("mongodb+srv://aakasht:kh0r81sfVxvnrGme@cluster0.mw8lk.mongodb.net/?retryWrites=true&maxIdleTimeMS=120000/CRUD",{
        useUnifiedTopology: true,
        useNewUrlParser: true
      });
      console.log('Mongo Connected');
    } catch (error) {
      console.log('Failed to connect Mongo');
      console.log(error);
    }
};
connect();
let port = 3000;
app.listen(port, () => {
    console.log('Listening on port ' + port);
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/project', crudOperation);

