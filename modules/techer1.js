const mongoose = require('mongoose');
const Usert = mongoose.model('Usert',
new mongoose.Schema({
name: {type:String},
image: {type:String},
student: {type:String},
namet1: {type:String},
level1: {type:String},
school1: {type:String},
namet2: {type:String},
level2: {type:String},
school2: {type:String},
namet3: {type:String},
level3: {type:String},
school3: {type:String},
}
))

module.exports = Usert;