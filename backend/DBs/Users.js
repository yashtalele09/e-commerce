const mongoose = require ('mongoose');

const UsersSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
});

module.exports = mongoose.model('users',UsersSchema);