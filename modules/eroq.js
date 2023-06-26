const mongoose = require('mongoose');
const Userq = mongoose.model('Userq',
new mongoose.Schema({
name: {type:String},
image: {type:String},

}
))

module.exports = Userq;