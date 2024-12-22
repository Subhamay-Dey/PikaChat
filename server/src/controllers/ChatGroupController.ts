import { Request, Response } from "express"
import prisma from "../config/db.config.js"

class ChatGroupController {
    static async store(req:Request, res:Response) {
        try {
            const body = req.body
            const user = req.user
            await prisma.chatGroup.create({
                data: {
                    title: body.title,
                    passcode: body.passcode,
                    user_id: user.id
                }
            })

            return res.status(201).json({message: "Chat group created successfully"})
        } catch (error) {
            return res.json(500).json({message:"something went wrong, please try again!"})
        }
    }
}

export default ChatGroupController