var mongoose = require('./DBConfig');
var BookSchema = mongoose.model('Book');

var BookController = function(){
    this.insertBook = function(data){
        return new Promise(function (resolve,reject) {
            var Book = new BookSchema({
                name : data.name,
                author : data.author,
                price : data.price
            });

            console.log('out');
            Book.save().then(function(){
                console.log('resolve');
                resolve({status:200,message:'Book Added'})
            }).catch(function (err) {
                console.log('reject');
                reject({status:500,message:'Error-'+err})
            })
        })
    }

    this.getAll = function(){
        return new Promise(function(resolve,reject){
            BookSchema.find().exec().then(function(data){
                resolve({status:200, message:data})
            }).catch(function (reason) {
                reject({status:500,message:'Error-'+reason})
            })
        })
    }

    this.getById = function(id){
        return new Promise(function(resolve,reject){
            BookSchema.find({_id:id}).exec().then(function(data){
                resolve({status:200,message :data})
            }).catch(function (reason) {
                reject({status:500,message:'Error-'+reason})
            })
        })
    }

    this.getByName = function(name){
        return new Promise(function(resolve,reject){
            BookSchema.find({_name:name}).exec().then(function(data){
                resolve({status:200,message:data});
            }).catch(function (err) {
                reject({status:500, message:'Error - '+ err});
            })
        })
    }

    this.updateBook = function(id,data){
        return new Promise(function (resolve,reject){
            BookSchema.update({_id:id},data).then(function () {
                resolve({status:200,message:'Book Updated'})
            }).catch(function (reason) {
                reject({status:500,message:'Error-'+ reason})
            })
        })
    }

    this.deleteBook = function(id){
        return new Promise(function(resolve,reject){
            BookSchema.remove({_id:id}).then(function () {
                resolve({status:200, message:'Book deleted'})
            }).catch(function (reason) {
                reject({status:500, message:'Error - ' + reason})
            })
        })
    }
}

module.exports = new BookController();