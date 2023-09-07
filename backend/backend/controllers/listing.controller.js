const listing =require("../models/listing.model");
const asyncHandler = require("express-async-handler")

exports.createlistingData =asyncHandler(async(req,res)=>{
        //create new book
        const LandingData = await listing.create(req.body);
        res.json(LandingData)

    })
   

//get all books

exports.getData = asyncHandler(async(req,res)=>{
    try {
        const getAllData = await listing.find()
        res.json(getAllData)
    } catch (error) {
        throw new Error(error)
    }
})





