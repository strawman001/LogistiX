const UserController = require('../controller/UserController')
const express = require('express');
const router = express.Router();
const path = require('path');
const bodyParser = require('body-parser');

const userController = new UserController();
let viewPath = path.resolve(__dirname,"../views");
let jsonParser = bodyParser.json();

router.get('/registerPage',function(req,res){
    res.sendFile(viewPath+"/signup.html");
});
router.get('/loginPage',function(req,res){
    res.sendFile(viewPath+"/signin.html");
});

router.post('/loginByViewer.action',jsonParser,function(req,res){
    userController.loginByViewer(req.body,req,res);
});
router.post('/loginByManager.action',jsonParser,function(req,res){
    userController.loginByManager(req.body,req,res);
});
router.post('/registerByManager.action',jsonParser,function(req,res){
    userController.registerByManager(req.body,req,res);
});
router.post('/registerByViewer.action',jsonParser,function(req,res){
    userController.registerByViewer(req.body,req,res);
});


module.exports = router;