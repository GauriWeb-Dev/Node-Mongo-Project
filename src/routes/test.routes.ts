import { Router } from "express";
import { TestController } from "../controller/test.controller";

const testRoute = Router();
testRoute.get("/getTest", TestController.gettingTest)
testRoute.post('/setTest',TestController.setTest)
testRoute.post('/createTest',TestController.createTest)

export default testRoute;