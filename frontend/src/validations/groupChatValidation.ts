import {z} from "zod"

export const createChatSchema = z.object({
    title: z.string().min(3, {message:"Chat title must be atleast of 3 characters long."}).max(191, {message:"Chat title must not be more than 191 characters long."}),
    passcode: z.string().min(4, {message: "Chat passcode must be atleast 4 character long."}).max(25, {message:"Chat passcode must not be more than 25 characters."})
}).required()

export type createChatSchemaType = z.infer<typeof createChatSchema>