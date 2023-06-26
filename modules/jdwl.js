const mongoose = require('mongoose');
const Userj = mongoose.model('Userj',
new mongoose.Schema({
name: {type:String},


}
))

module.exports = Userj;