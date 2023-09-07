const mongoose = require('mongoose'); // Erase if already required
// Declare the Schema of the Mong model
var missionSchema = new mongoose.Schema({
    mission_name:{
        type:String,
        // unique:true,
        index:true,
    },
    mission_id:{
        type:String,
        // unique:true,
        index:true,
    },
    
    manufacturers:{
        type:Array,
    },
    payload_ids:{
        type:Array,
        // unique:true,
    },
    description:{
        type:String,
        // unique:true,
    },
    

},{ timestamps: {} });

//Export the model
module.exports = mongoose.model('missionData', missionSchema);