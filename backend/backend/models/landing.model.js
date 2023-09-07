const mongoose = require('mongoose'); // Erase if already required
// Declare the Schema of the Mong model
var landingSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        // unique:true,
        index:true,
    },
    founder:{
        type:String,
        required:true,
        // unique:true,
        index:true,
    },
    founded:{
        type:String,
        // required:true,
        // unique:true,
    },
    employees:{
        type:String,
        // required:true,
        // unique:true,
    },
    vehicles:{
        type:String,
        required:true,
        // unique:true,
    },
    launch_sites:{
        type:String,
        required:true,
        // unique:true,
    },
    test_sites:{
        type:String,
        // unique:true,
    },
    ceo:{
        type:String,
        required:true,
        // unique:true,
    },
    cto:{
        type:String,
        required:true,
        // unique:true,
    },
    coo:{
        type:String,
        required:true,
        // unique:true,
    },

    cto_propulsion:{
        type:String,
        // unique:true,
    },
    valuation:{
        type:String,
        // unique:true,
    },
    headquarters:{
        address:{
            type:String,
        },
        state:{
            type:String,
        },
        city:{
            type:String,
        }
        // unique:true,
    },
    links:{
        website:{
            type:String,
        },
        flickr:{
            type:String,
        },
        twitter:{
            type:String,
        }
        // unique:true,
    },
    summary:{
        type:String
    }

},{ timestamps: {} });

//Export the model
module.exports = mongoose.model('landData', landingSchema);

// {
//     "name": "SpaceX",
//     "founder": "Elon Musk",
//     "founded": 2002,
//     "employees": 7000,
//     "vehicles": 3,
//     "launch_sites": 3,
//     "test_sites": 1,
//     "ceo": "Elon Musk",
//     "cto": "Elon Musk",
//     "coo": "Gwynne Shotwell",
//     "cto_propulsion": "Tom Mueller",
//     "valuation": 27500000000,
//     "headquarters": {
//       "address": "Rocket Road",
//       "city": "Hawthorne",
//       "state": "California"
//     },
//     "links": {
//       "website": "https://www.spacex.com/",
//       "flickr": "https://www.flickr.com/photos/spacex/",
//       "twitter": "https://twitter.com/SpaceX",
//       "elon_twitter": "https://twitter.com/elonmusk"
//     },
//     "summary": "SpaceX designs, manufactures and launches advanced rockets and spacecraft. The company was founded in 2002 to revolutionize space technology, with the ultimate goal of enabling people to live on other planets."
//   }