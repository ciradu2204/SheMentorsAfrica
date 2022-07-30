import * as yup from "yup";


export const availability = yup.object({
    availability: yup.array().required("Field is required").min(2)
});