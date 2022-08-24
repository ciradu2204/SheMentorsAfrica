import * as yup from "yup";
export const resetPasswordValidationShema = yup.object({
  email: yup.string().email("Not a valid email").required("The email is required"),
});