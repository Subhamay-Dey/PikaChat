import { Request, Response } from "express"
import prisma from "../config/db.config.js";

class ChatGroupUserController {
    static async index(req:Request, res:Response) {
        try {
            const {group_id} = req.query;
            const users = await prisma.groupUsers.findMany({
                where: {
                    group_id: group_id as string
                }
            })
            return res.status(200).json({message: "Data fetched successfully", data: users})
        } catch (error) {
            return res.status(500).json({message: "Something went wrong, Please try again!"})
        }
    }
}

export default ChatGroupUserController