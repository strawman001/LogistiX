const mongoose = require('mongoose');

const viewerSchema = mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    accessToken:{
        type:String,
        require:true,
		default:"test"
    },
    type:{
        type:String,
        default:'Viewer',
        require:true
    }
});

viewerSchema.index({username:1},{unique:true});
viewerSchema.index({email:1},{unique:true});

const Viewer = mongoose.model('Viewer',viewerSchema);
module.exports = Viewer;

