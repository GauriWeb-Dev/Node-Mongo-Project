import { Router } from "express";
import { Request, Response } from "express";
const router = Router();
import mongoose from "mongoose";
import testRoute from "./test.routes";

router.get("/test", (req: Request, res: Response) =>
	res.send({ status: "success" })
);
router.get("/healthcheck", (req: Request, res: Response) =>
	res.sendStatus(200)
);
router.get("/", (req, res, next) => {
	console.log("in default API");
	return res.status(200).json({
		message: "Hello from root!",
	});
});

router.get("/path", async (req, res, next) => {
	console.log(
		`DB connection state ${mongoose.connection.readyState} => 0: disconnected 1: connected 2: connecting 3: disconnecting`
	); //0: disconnected 1: connected 2: connecting 3: disconnecting
	return res.status(200).json({
		message: "Hello from path!",
	});
});
router.use("/test", testRoute);

export default router;
