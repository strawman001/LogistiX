const loginInterceptor = require('../interceptor/LoginInterceptor')
const express = require('express');
const router = express.Router();

router.use('*',function(req,res,next){loginInterceptor(req,res,next)});

module.exports = router;