const mongoose = require('mongoose');
const Userw = mongoose.model('Userw',
new mongoose.Schema({
name: {type:String},


}
))

module.exports = Userw;