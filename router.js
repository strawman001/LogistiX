const express = require('express');
const router = express.Router();

const assetRouter = require('./route/AssetRouter');
const userRouter = require('./route/UserRouter');
const interceptorRouter = require('./route/InterceptorRouter');

router.use('/',interceptorRouter);
router.use('/user',userRouter);
router.use('/view',assetRouter);

module.exports = router;
