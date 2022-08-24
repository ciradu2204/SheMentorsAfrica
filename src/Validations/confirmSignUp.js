import * as yup from "yup";
export const confirmSignUpValidationShema = yup.object({
  code: yup.number().required("The code needs to be entered"),
});