const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProjectSchema = new Schema({
    name: {type: String, required: true, max: 100},
    img: {type: String, required: true},
    summary: {type: String, required: true},
});
module.exports = mongoose.model('Project', ProjectSchema);
