const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const dBconnected = require("./config/dbConnect")
const landingRouters = require("./routes/landing.route")
const lstingRouters = require("./routes/listing.route")
const missionRouters = require("./routes/mission.route")
const shipRouters = require("./routes/ship.route")
const {notFound,errorHandler} = require("./middleware/errorhandling")
const PORT = process.env.PORT||5000;
dBconnected.dBconnect()
const app = express();
app.use(express.json())
app.use(cors({
    origin: '*'
}));
app.use(express.urlencoded({extended:true}))
//error handler Middleware
app.use('/api/space',landingRouters.landingRouters)
app.use('/api/space',lstingRouters.listingRouters)
app.use('/api/space',missionRouters.missionRouters)
app.use('/api/space',shipRouters.shipRouters)


app.use(notFound)
app.use(errorHandler)
app.listen(PORT,(err)=>{
    console.log(`Server Running on ${PORT}`);
})