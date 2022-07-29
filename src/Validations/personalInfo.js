import * as yup from "yup";

  export const personalInfoValidateSchema = yup.object({
    profileImage: yup.object().required("Profile image is required"),
    role: yup.string().required("Interest field is required"),
    bio: yup.string().required("Bio field is required").min(150, "Bio should be 150 characters at least"),
    country: yup.string().required("Country field is required"),
    languages: yup.array().required("Language field is Required"),
  });