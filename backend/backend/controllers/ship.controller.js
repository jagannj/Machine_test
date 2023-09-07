const Ship =require("../models/ship.model");
const asyncHandler = require("express-async-handler")

exports.createShipData =asyncHandler(async(req,res)=>{
        //create new book
        const MissionData = await Ship.create(req.body);
        res.json(MissionData)

    })
   

//get all books
exports.getData = asyncHandler(async(req,res)=>{
    try {
        const getAllData = await Ship.find()
        res.json(getAllData)
    } catch (error) {
        throw new Error(error)
    }
})





