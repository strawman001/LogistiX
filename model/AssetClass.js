const mongoose = require('mongoose');

const assetClassSchema = mongoose.Schema({
    classRefId:{
        type:mongoose.Schema.Types.ObjectId,
        require:true,
        default:function(){return new mongoose.Types.ObjectId}
    },
    className:{
        type:String,
        require:true
    },
    classDescription:{
        type:String
    }
});

assetClassSchema.index({classRefId:1},{unique:true});
const AssetClass = mongoose.model('AssetClass',assetClassSchema);

module.exports = AssetClass;