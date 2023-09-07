const express =require("express");
const missionRouters = express.Router();
const{ createMissionData, getData}= require("../controllers/mission.controller")
missionRouters.post("/mission/create",createMissionData)
missionRouters.get("/mission/all",getData)

module.exports ={missionRouters}