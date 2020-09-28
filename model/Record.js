const mongoose = require('mongoose');

const recordSchema = mongoose.Schema({
    recordInfo:{
        type:String,
        require:true
    },
    recordTime:{
        type:Date,
        require:true
    },
    jobNumber:{
        type:String,
        require:true
    },
    realName:{
        type:String,
        require:true
    }
});

const Record = mongoose.model('Record',recordSchema);
module.exports = Record; 