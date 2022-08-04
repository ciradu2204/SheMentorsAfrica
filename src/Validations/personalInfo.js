import * as yup from "yup";

  export const personalInfoValidateSchema = yup.object({
    profileImage: yup.object({
      name: yup.string().required("The profile image is required"),
    }).required("Profile image is required"),
    bio: yup.string().required("Bio field is required").min(150, "Bio should be 150 characters at least"),
    country: yup.string().required("Country field is required"),
    languages: yup.array().required("Language field is Required"),
    fullName: yup.string().required("The Full Name is needed"), 
  });