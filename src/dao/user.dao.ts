import mongoose from "mongoose";

export class userDao extends mongoose.Document{
    email:"string";
    name:"string"
}