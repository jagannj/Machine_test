const Landing =require("../models/landing.model");
const asyncHandler = require("express-async-handler")

exports.createLandData =asyncHandler(async(req,res)=>{
        //create new book
        const LandingData = await Landing.create(req.body);
        res.json(LandingData)

    })
   

//get all books

exports.getData = asyncHandler(async(req,res)=>{
    try {
        const getAllData = await Landing.find()
        res.json(getAllData)
    } catch (error) {
        throw new Error(error)
    }
})





