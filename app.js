var express = require('express');
var Cors = require('cors');
var BodyParser = require('body-parser');
var Routes = require('./Routes');

const app = express();
app.use(Cors());
app.use(BodyParser.urlencoded({extended:false}));
app.use(BodyParser.json());
app.use('/',Routes);

app.listen(8083,'localhost',function (err) {
    if(err){
        console.log(err);
        process.exit(-1);
    }
    console.log('Listening on port 8083');
});