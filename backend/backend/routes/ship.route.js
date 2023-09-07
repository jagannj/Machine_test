const express =require("express");
const shipRouters = express.Router();
const{ createShipData, getData}= require("../controllers/ship.controller")
shipRouters.post("/ship/create",createShipData)
shipRouters.get("/ship/all",getData)

module.exports ={shipRouters}