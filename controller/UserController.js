const Manager = require('../model/Manager');
const Viewer = require('../model/Viewer');
const bcrypt = require('bcryptjs');

class UserController{
    registerByViewer = function(viewerInfo,req,res){
        var salt = bcrypt.genSaltSync(10);
        var hashPassword = bcrypt.hashSync(viewerInfo.password,salt);
        viewerInfo.password = hashPassword;
        Viewer.create(viewerInfo,function(err,viewer){
            if(!err){
                res.json({
                    flag:true
                });
            }else{
                res.json({
                    flag:false,
                    message:err
                });
            }
        });
    }
    registerByManager = function(managerInfo,req,res){
        var salt = bcrypt.genSaltSync(10);
        var hashPassword = bcrypt.hashSync(managerInfo.password,salt);
        managerInfo.password = hashPassword;
        Manager.create(managerInfo,function(err,manager){
            if(!err){
                res.json({
                    flag:true
                });
            }else{
                res.json({
                    flag:false,
                    message:err
                });
            }
        })
    }
    loginByViewer = function(userInfo,req,res){
        Viewer.findOne({username:userInfo.username},function(err,viewer){
            if(viewer!=null){
                if(bcrypt.compareSync(userInfo.password,viewer.password)){
                    req.session.user = viewer;
                    res.json({
                        flag:true,
                        type:'Viewer'
                    });
                }else{
                    res.json({
                        flag:false,
                        message:'Username or Password is invalid!'
                    });
                }     
            }else{
                res.json({
                    flag:false,
                    message:err
                });
            }
        })
    }
    loginByManager = function(userInfo,req,res){
        Manager.findOne({},function(err,manager){
            if(manager!=null){
                if(bcrypt.compareSync(userInfo.password,manager.password)){
                    req.session.user = manager;
                    res.json({
                        flag:true,
                        type:'Manager'
                    });
                }else{
                    res.json({
                        flag:false,
                        message:'Username or Password is invalid!'
                    });
                }     
            }else{
                res.json({
                    flag:false,
                    message:err
                });
            }
        });
    }
}

module.exports = UserController;