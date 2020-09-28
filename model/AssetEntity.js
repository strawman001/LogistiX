const mongoose = require('mongoose');

const assetEntitySchema = mongoose.Schema({
    entityTrackCode:{
        type:mongoose.Schema.Types.ObjectId,
        require:true,
        default:function(){return new mongoose.Types.ObjectId}
    },
    entityName:{
        type:String,
        require:true
    },
    entityDefaultPosition:{
        type:String,
        require:true
    },
    entityCurrentPosition:{
        type:String,
        require:true
    },
    entityStatus:{
        type:String,
        require:true
    },
    entityDescription:{
        type:String,
    },
    entityComment:{
        type:String,
    },
    classRefId:{
        type:mongoose.Schema.Types.ObjectId,
        require:true
    }
});

assetEntitySchema.index({entityTrackCode:1},{unique:true});
const AssetEntity = mongoose.model('AssetEntity',assetEntitySchema);

module.exports = AssetEntity;
