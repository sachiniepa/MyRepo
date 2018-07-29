var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    name : {
        type : String,
        required : true
    },

    author : {
        type : String,
        required : true
    },

    price : {
        type : Number,
        required : true
    }
});

mongoose.model('Book',BookSchema);

mongoose.connect('mongodb://127.0.0.1:27017/test', function(err){
    if(err){
        console.log(err);
        process.exit(-1);
    }
    console.log('DB connected!');
});

module.exports = mongoose;