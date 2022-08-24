import * as yup from "yup";
import YupPassword from "yup-password";
YupPassword(yup);
export const confirmResetPasswordValidationShema = yup.object({
  code: yup.number().required("The code needs to be entered"),
  password: yup
    .string()
    .password("Password must have at least 8 characters, at most 250 characters, at least 1 lowercase letter, at least 1 uppercase letter, at least 1 number and at least 1 symbol"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});