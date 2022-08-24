import * as yup from "yup";
import YupPassword from "yup-password";
YupPassword(yup);
export const signUpValidationShema = yup.object({
  name: yup.string().required(),
  email: yup.string().email("The email is not valid").required("The email is required"),
  password: yup
    .string()
    .password("Password must have at least 8 characters, at most 250 characters, at least 1 lowercase letter, at least 1 uppercase letter, at least 1 number and at least 1 symbol").required("Password required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match").required("Confirm Password Required"),
});