import * as yup from "yup";

export const experienceShema = yup.object({
    level: yup.string().required("Field is required"),
    mentorshipTopics: yup.string().required("Field is required").min(1),
    areasOfExpertise: yup.array().required("Field is required").min(3),
    availability: yup.array().required("Field is required").min(2)
});

 