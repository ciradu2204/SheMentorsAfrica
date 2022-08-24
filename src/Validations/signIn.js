import * as yup from "yup";
import YupPassword from "yup-password";
YupPassword(yup);
export const signInValidationShema = yup.object({
  email: yup.string().email("It is not a valid email").required("Email is required"),
  password: yup
    .string()
    .password("Password must have at least 8 characters, at most 250 characters, at least 1 lowercase letter, at least 1 uppercase letter, at least 1 number and at least 1 symbol"),
});