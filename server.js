const express = require('express');
var bodyParser = require('body-parser');
require('./connect/connect');
const prossesroutes = require('./routes/prosses');










const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());
app.use('/insitute', prossesroutes);


var port = process.env.PORT || 28707;
app.listen(port ,()=>{
console.log('code successfly');
});
