import vine from "@vinejs/vine";
import { CustomErrorReporter } from "./errorReporter.js";

vine.errorReporter = () => new CustomErrorReporter()

export const LocationdataSchema = vine.object({
    city: vine.string().minLength(2).maxLength(191),
    state: vine.string().minLength(2).maxLength(191),
    nationality: vine.string().minLength(2).maxLength(191),
})