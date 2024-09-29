import express from "express"
import { login } from "../Controllers/Auth.js"
import { updatechaneldata,getallchanels } from "../Controllers/channel.js";
import { addtopoints,getpoints } from "../Controllers/points.js"
const routes=express.Router();

routes.post('/login',login)
routes.patch('/update/:id',updatechaneldata)
routes.get('/getallchannel',getallchanels)

routes.post("/addpoints/", addtopoints);
routes.get("/getpoints/:userId",getpoints)
export default routes;