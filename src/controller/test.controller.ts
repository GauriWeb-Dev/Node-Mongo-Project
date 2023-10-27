import { Request,Response } from "express";
import { TestService } from "../service/test.service";
import { TestDao } from "../dao/test.dao";

export class TestController{
    static async gettingTest(req: Request<{}>, res: Response) {
		let drawing = await TestService.getReply();
        
		return res.status(201).json({
            res:drawing
        })
	}

    static async createTest(req: Request<{}, {}, TestDao>, res: Response) {
		let drawing = await TestService.createTest(req.body);
		return res.status(201).send({});
	}

    static async setTest(req: Request<{}>, res: Response) {
		let drawing = await TestService.setReply(req.body);
        
		return res.status(201).json({
            res:drawing
        })
	}



}