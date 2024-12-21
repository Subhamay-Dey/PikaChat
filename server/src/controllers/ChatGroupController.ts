import { Request, Response } from "express"

class ChatGroupController {
    static async store(req:Request, res:Response) {
        try {
            const body = req.body
        } catch (error) {
            return res.json(500).json({message:"something went wrong, please try again!"})
        }
    }
}

export default ChatGroupController