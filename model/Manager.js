const mongoose = require('mongoose');

const managerSchema = mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    jobNumber:{
        type:String,
        require:true
    },
    realName:{
        type:String,
        require:true
    },
    type:{
        type:String,
        default:'Manager',
        require:true
    }
});

managerSchema.index({username:1},{unique:true});
const Manager = mongoose.model('Manager',managerSchema);

module.exports = Manager;