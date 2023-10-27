import mongoose from "mongoose";

export class TestDao extends mongoose.Document {
  email: string;
  name: string;
  isEmailVerified: boolean;
  authType: string;
  authToken: String;
  password: string;
  picture: string;
  createdAt: Date;
  updatedAt: Date;
}
