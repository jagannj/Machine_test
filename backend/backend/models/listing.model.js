const mongoose = require('mongoose'); // Erase if already required
// Declare the Schema of the Mong model
var listingSchema = new mongoose.Schema({
    flight_number:{
        type:Number,
        required:true,
        // unique:true,
        index:true,
    },
    mission_name:{
        type:String,
        required:true,
        // unique:true,
        index:true,
    },
    mission_id:[],  
    upcoming:{
        type:Boolean,
        default: false
    },
    launch_year:{
        type:String,
        // unique:true,
    },
    launch_date_unix:{
        type:String,
        required:true,
        // unique:true,
    },
    launch_date_utc:{
        type:String,
        // unique:true,
    },
    launch_date_local:{
        type:String,
        required:true,
        // unique:true,
    },
    is_tentative:{
        type:Boolean,
        default:false,
    },
    tentative_max_precision:{
        type:String,
        required:true,
        // unique:true,
    },

    tbd:{
        type:Boolean,
        default:false,
        // unique:true,
    },
    launch_window:{
        type:String,
        // unique:true,
    },
    rocket:{
        rocket_id:{
            type:String,
        },
        rocket_name:{
            type:String,
        },
        rocket_type:{
            type:String,
        },
        first_stage:{
            cores:[]
        }
        // unique:true,
    },
    timeline:{
        webcast_liftoff:{
            type:String,
        }
    }

},{ timestamps: {} });

//Export the model
module.exports = mongoose.model('listingData', listingSchema);