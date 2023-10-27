import { Schema, model } from "mongoose";
import { userDao } from "../dao/user.dao";

const userSchema=new Schema<userDao>({
    "email":{type:"string",required:true,unique:true},
    "name":{type:"string"}
}   
)

const UserModel=model<userDao>('user',userSchema)
export default UserModel