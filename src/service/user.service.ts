import { error } from "console";
import UserModel from "../models/user.model";
import { userDao } from "../dao/user.dao";

export class UserService{
    static async addNewUser(newuser):Promise<userDao>{
       const user=await UserModel.findOne({
        email:newuser.email
       })
       if(user){
    throw new error('User exists with same Email')
       }
       const addingNew= await UserModel.create(newuser)
       return addingNew
}

static async updateUser(updateuser):Promise<userDao>{
    const updatedUser=await UserModel.findOneAndUpdate({
     email:updateuser.email
    },updateuser)
    return updatedUser
}

static async getAllUsers(user):Promise<userDao>{
    const userNew=await UserModel.findOne({email:user.email}).lean()
    console.log("users",userNew)
    return userNew
}

static async deleteeUser(user):Promise<userDao>{
    const deletedUser=await UserModel.findOneAndDelete({email:user.email})
    console.log("users",deletedUser)
    return deletedUser
}
}