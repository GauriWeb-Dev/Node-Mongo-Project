import express from "express";
const app = express();
import cors from "cors";
import * as dotenv from "dotenv";
import connectDatabase from "./src/database/db";
import router from "./src/routes/routes";

dotenv.config();

const port = process.env.PORT;

app.use(
	cors({
		exposedHeaders: ['etk'],
	})
);

app.use(express.json());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));

app.use("", async (req, res, next) => {
	await connectDatabase().catch((error) => {
		next(error);
	});
	next();
});

app.use(router);

app.use((req, res, next) => {
	return res.status(404).json({
		Message:"Welcoming to NodeMongo"
	});
});

// app.use(errorHandler);

app.listen(port,()=>{
  console.log(`app is running over port : ${port}`)
})

