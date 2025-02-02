import prisma from "../config/db.config.js";

interface SearchType {
    city?:string,
    state?:string,
    nationality:string
}

class UserSearchController {
    static async search(req: any, res: any) {

        try {
            const body:SearchType = req.body;

            const users = await prisma.user.findMany({
                where:{
                    city: body.city,
                    state: body.state,
                    nationality: body.nationality,
                },
                orderBy: {
                    created_at: "desc"
                }
        })
        res.status(200).json({message:"User fetched successfully"});
        return users;
        } catch (error) {
            console.log(error.message);
            res.status(400).json({message:"Something went wrong"})
        }

    }
}

export default UserSearchController;