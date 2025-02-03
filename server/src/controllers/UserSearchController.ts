import prisma from "../config/db.config.js";
import { Request, Response } from "express";

interface SearchType {
    city?:string,
    state?:string,
    nationality?:string
}

class UserSearchController {
    static async search(req: Request, res: Response) {

        try {
            const {city, state, nationality} = req.query as SearchType;

            if (!nationality) {
                return res.status(400).json({ message: "Nationality is required" });
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