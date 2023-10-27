import { TestDao } from "../dao/test.dao"
import TestModel from "../models/test.models"
import { generateRandomAlphaNumeric } from "../utils/string.utils"

export class TestService{
    static async getReply(){
       let res='its get from routes'
        return res
    }

    static async setReply(req){
        console.log("req",req)
        let res='its get from routes'
         return res
     }

    static async createTest(test: TestDao): Promise<TestDao> { 
		const dbtest = await TestModel.findOne({ email: test.email }).lean();
		if (dbtest) {
			console.error("ERROR : Email already exists" );
			throw new Error("ERROREmail already exists");
		}
		test.authToken = generateRandomAlphaNumeric(64);
		test.isEmailVerified = false;
		//1. send Email
		let newtest = await TestModel.create(test);
		return newtest;
	}
}