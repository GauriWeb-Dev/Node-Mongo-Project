import { Request, Response } from "express"
import { UserService } from "../service/user.service"

export class UserController {

    static async createUser(req:Request,res:Response){
        console.log("in controller")
        const newUser=await UserService.addNewUser(req.body)
        console.log("created user",newUser)
        return res.status(201).json({"User":newUser}) 
    }

    static async getUser(req:Request,res:Response){
const users=await UserService.getAllUsers(req.body)
return res.status(200).json({"User":users}) 
    }

    static async updateUser(req:Request,res:Response){
const updatedUser=await UserService.updateUser(req.body)
return res.status(200).json({"updated User":updatedUser})
    }

    static async deleteUser(req:Request,res:Response){
        const deleteUser=await UserService.deleteeUser(req.body)
        return res.status(200).json({"deleted User":deleteUser})
    }

    
}