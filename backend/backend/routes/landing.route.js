const express =require("express");
const landingRouters = express.Router();
const{ createLandData, getData}= require("../controllers/landing.controller")
landingRouters.post("/landing",createLandData)
landingRouters.get("/landing/all",getData)

module.exports ={landingRouters}