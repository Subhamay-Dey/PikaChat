import { Request, Response } from "express";
import prisma from "../config/db.config.js";

interface LocationType{
    city: String,
    state: String,
    nationality: String,
}

class LocationController {
    static async addlocation(req:Request, res:Response) {

        try {
            const body:LocationType = req.body

            const savedUserData = await prisma.user.update({
                where: { id: req.user.id },
                data: {
                    city: body.city as string,
                    state: body.state as string,
                    nationality: body.nationality as string,
                }
            })
            console.log(savedUserData);
            return res.status(200).json({message: "User updated succesfully"})
        } catch (error) {
            return res.status(500).json({message:"Internal Error"})
        }
    }
}

export default LocationController