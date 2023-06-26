const mongoose = require('mongoose');
const Userm = mongoose.model('Userm',
new mongoose.Schema({
name: {type:String},
image: {type:String},
link: {type:String},

}
))

module.exports = Userm;