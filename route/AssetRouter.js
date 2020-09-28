const AssetController = require('../controller/AssetController')
const express = require('express');
const router = express.Router();
const path = require('path');
const bodyParser = require('body-parser');

const assetController = new AssetController();
let viewPath = path.resolve(__dirname,"../views");
let jsonParser = bodyParser.json();

router.get('/manager/managerPage',function(req,res){
    res.sendFile(viewPath+"/managerView.html");
});
router.get('/viewer/viewerPage',function(req,res){
    res.sendFile(viewPath+"/viewerView.html");
});
router.get('/manager/recordPage',function(req,res){
    res.sendFile(viewPath+"/recordView.html");
});
router.get('/viewer/recordPage',function(req,res){
    res.sendFile(viewPath+"/recordView.html");
});

router.post('/manager/asset',jsonParser,function(req,res){
    assetController.addAsset(req.body,req,res);
});
router.delete('/manager/asset/:trackCode',jsonParser,function(req,res){
    assetController.deleteAsset(req.params.trackCode,req,res);
});
router.patch('/manager/asset',jsonParser,function(req,res){
    assetController.updateAsset(req.body,req,res);
});
router.get('/manager/asset/:classRefId',jsonParser,function(req,res){
    assetController.findAsset(req.params.classRefId,req,res);
});
router.post('/manager/asset/condition',jsonParser,function(req,res){
    assetController.findAssetByCondition(req.body,req,res);
});
router.post('/manager/assetClass',jsonParser,function(req,res){
    assetController.addAssetClass(req.body,req,res);
});
router.delete('/manager/assetClass/:classRefId',jsonParser,function(req,res){
    assetController.deleteAssetClass(req.params.classRefId,req,res);
});
router.get('/manager/assetClass',jsonParser,function(req,res){
    assetController.findAssetClass(req,res);
});
router.get('/manager/record',jsonParser,function(req,res){
    assetController.findRecord(req,res);
});

router.get('/viewer/asset/:classRefId',jsonParser,function(req,res){
    assetController.findAsset(req.params.classRefId,req,res);
});
router.post('/viewer/asset/condition',jsonParser,function(req,res){
    assetController.findAssetByCondition(req.body,req,res);
});
router.get('/viewer/assetClass',jsonParser,function(req,res){
    assetController.findAssetClass(req,res);
});
router.get('/viewer/record',jsonParser,function(req,res){
    assetController.findRecord(req,res);
});

module.exports = router;