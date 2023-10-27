import { Schema, model } from "mongoose";
import { TestDao } from "../dao/test.dao";

const testSchema = new Schema<TestDao>(
  {
    email: { type: String, required: true, unique: true },
    name: { type: String, required: false },
    isEmailVerified: { type: Boolean, alias: "is-email-verified" },
    authType: { type: String, alias: "auth-type" },
    authToken: { type: String, alias: "auth-token" },
    picture: { type: String },
    password: { type: String },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const TestModel = model<TestDao>("Test", testSchema);

export default TestModel;
