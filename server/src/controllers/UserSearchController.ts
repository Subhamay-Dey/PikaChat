import prisma from "../config/db.config.js";
import { Request, Response } from "express";

interface SearchType {
    city?:string,
    state?:string,
    nationality?:string,
    userId?: number,
}

class UserSearchController {
    static async search(req: Request, res: Response) {

        try {
            const {city, state, nationality, userId} = req.query as SearchType;

            if (!userId) {
                return res.status(401).json({ message: "User must be authenticated" });
            }

            const users = await prisma.user.findMany({
                where:{
                    nationality: {
                        equals: nationality,
                        mode: "insensitive",
                    },
                    ...(city && {city:{
                        equals: city,
                        mode: "insensitive",
                        }
                    }),
                    ...(state && {state:{
                        equals: state,
                        mode: "insensitive",
                        }
                    }),
                    NOT: {
                        id: userId,
                    }
                },
                orderBy: {
                    created_at: "desc"
                }
        })
        res.status(200).json({message:"User fetched successfully", data: users});
        } catch (error) {
            console.log(error.message);
            res.status(500).json({message:"Something went wrong"})
        }

    }
}

export default UserSearchController;