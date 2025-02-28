import {z} from "zod"

export const createDetailsSchema = z.object({
    city: z.string().min(3, {message:"City name must be atleast of 3 characters long."}).max(191, {message:"City name must not be more than 191 characters long."}),
    state: z.string().min(3, {message: "State name must be atleast 4 character long."}).max(191, {message:"State name must not be more than 191 characters."}),
    nationality: z.string().min(3, {message: "Nationality name must be atleast 4 character long."}).max(191, {message:"Nationality name must not be more than 191 characters."})
}).required()

export type createDetailsSchemaType = z.infer<typeof createDetailsSchema>