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

            console.log("Backend log" + body);

            await prisma.user.update({
                where: { id: req.user.id },
                data: {
                    city: body.city as string,
                    state: body.state as string,
                    nationality: body.nationality as string,
                }
            })
        } catch (error) {
            res.status(500).json({message:"Internal Error"})
        }
    }
}

export default LocationController