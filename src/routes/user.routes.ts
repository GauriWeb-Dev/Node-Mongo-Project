import { Router } from "express";
import { UserController } from "../controller/user.controller";

const userRouter=Router()

userRouter.post("/getUser",UserController.getUser)

userRouter.post('/createUser', UserController.createUser)
userRouter.post('/updateUser', UserController.updateUser)
userRouter.post('/deleteUser', UserController.deleteUser)

export default userRouter