import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

let conn = null;
async function connectDatabase() {
  if (conn == null) {
    console.log(`Creating new connection to the database... ${process.env.DB}`);
    conn = await mongoose.connect(process.env.DB, {
      serverSelectionTimeoutMS: 5000,
    });
    return conn;
  }
  console.log("connection already established, reusing the connection");
}

export default connectDatabase;
