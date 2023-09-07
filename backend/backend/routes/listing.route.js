const express =require("express");
const listingRouters = express.Router();
const{ createlistingData, getData}= require("../controllers/listing.controller")
listingRouters.post("/listing/create",createlistingData)
listingRouters.get("/listing/all",getData)

module.exports ={listingRouters}