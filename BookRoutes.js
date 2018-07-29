var express = require('express');
var router = express.Router();
var Controller = require('./BookController');

router.post('/',function (req,res) {
    Controller.insertBook(req.body).then(function (data) {
        res.status(data.status).send({message:data.message})
    }).catch(function (err) {
        res.status(err.status).send({message : err.message})
    })
});
/*
router.get('/',function(req,res){
    Controller.getAll().then(function (data) {
        res.status(data.status).send({message : data.message})
    }).catch(function (err) {
        res.status(err.status).send({message:err.message})
    })
});
*/
router.get('/', function(req,res){
    if(req.query.name) {
        Controller.getByName(req.params.name).then(function (data) {
            res.status(data.status).send({message: data.message});
        }).catch(function (err) {
            res.status(err.status).send({message: err.message});
        })
    }
    else
        if(req.query.id) {
        Controller.getById(req.params.id).then(function(data){
            res.status(data.status).send({message:data.message});
        }).catch(function(err){
            res.status(err.status).send({message:err.message});
        })

        }

        else{
        Controller.getAll().then(function (data) {
            res.status(data.status).send({message:data.message});
        }).catch(function (err) {
            res.status(err.status).send({message:err.message});
        })
        }
})
/*
router.get('/:id',function (req,res) {
    Controller.getById(req.params.id).then(function (data) {
        res.status(data.status).send({message: data.message})
    }).catch(function (err) {
        res.status(err.status).send({message:err.message})
    })
});
*/
router.put('/:id',function (req,res) {
    Controller.updateBook(req.params.id,req.body).then(function (data) {
        res.status(data.status).send({message:data.message})
    }).catch(function (err) {
        res.status(err.status).send({message:err.message})
    })
});

router.delete('/:id', function (req,res) {
    console.log('out');
    Controller.deleteBook(req.params.id).then(function (data) {
        console.log('resolve');
        res.status(data.status).send({message:data.message})
    }).catch(function (err) {
        console.log('reject');
        res.status(err.status).send({message:err.message})
    })
});

module.exports = router;