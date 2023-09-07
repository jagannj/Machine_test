const mongoose = require('mongoose'); // Erase if already required
// Declare the Schema of the Mong model
var shipSchema = new mongoose.Schema({
    ship_name:{
        type:String,
        // unique:true,
        index:true,
    },
    ship_id:{
        type:String,
        // unique:true,
        index:true,
    },
    
    roles:{
        type:Array,
    },
    imo:{
        type:String,
        // unique:true,
    },
    abs:{
        type:String,
        // unique:true,
    },
    class:{
        type:String,
        // unique:true,
    },
    home_port:{
        type:String
    }
    

},{ timestamps: {} });

//Export the model
module.exports = mongoose.model('shipData', shipSchema);