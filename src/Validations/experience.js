import * as yup from "yup";
export const menteeExperienceShema = yup.object({
    education: yup.object({
           school: yup.string().required("The school is required"), 
           degree: yup.string().required("Specialization is required")
    }),
    connect: yup.object({
        linkedIn: yup.string().required("Your LinkedIn account is required"),
    })
});

export const mentorExperienceShema = yup.object({
    experience: yup.object({
           company: yup.string().required("Your current company is required"), 
           role: yup.string().required("Your current role is required")
    }),
    connect: yup.object({
        linkedIn: yup.string().url("It is not a valid url").required("Your LinkedIn account is required"),
        // twitter: yup.string().matches(re, "Url is not valid").notRequired(),
        // personalWebsite:  yup.string().matches(re, "Url is not valid").notRequired(),
    })
});

 