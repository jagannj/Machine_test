const Mission =require("../models/mission.model");
const asyncHandler = require("express-async-handler")

exports.createMissionData =asyncHandler(async(req,res)=>{
        //create new book
        const MissionData = await Mission.create(req.body);
        res.json(MissionData)

    })
   

//get all books

exports.getData = asyncHandler(async(req,res)=>{
    try {
        const getAllData = await Mission.find()
        res.json(getAllData)
    } catch (error) {
        throw new Error(error)
    }
})





