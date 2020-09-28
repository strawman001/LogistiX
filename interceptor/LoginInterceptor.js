const express = require('express');

function match(url,domain){
    if(url==domain||url.includes(domain)){
        return true;
    }else{
        return false;
    }
}

function loginAuthorized(req,res,next){ 
    if(match(req.originalUrl,'/user')){
        next();
    }else if(match(req.originalUrl,'/manager')&&req.session.user!=null&&req.session.user.type=="Manager"){
        next();
    }else if(match(req.originalUrl,'/viewer')&&req.session.user!=null&&req.session.user.type=="Viewer"){
        next();
    }else{
        res.redirect('/user/loginPage');
    }
}

module.exports = loginAuthorized;
