import * as yup from "yup";


export const menteeInterestSchema =  yup.object({
    role: yup.string().required("Role is required"),
    areasOfExpertise: yup.array().required("Areas of Expertise is required").min(2, "at least 2 Areas of Expertise"),
   mentorshipTopics: yup.array().required("Mentorship Topics is required").min(2, "at least  2 topics are required")
});

export const mentorInterestSchema =  yup.object({
    role: yup.string().required("Role is required"),
   level: yup.string().required("Level is required"), 
    areasOfExpertise: yup.array().required("Areas of Expertise is required").min(2, "at least 2 Areas of Expertise"),
   mentorshipTopics: yup.array().required("Mentorship Topics is required").min(2, "at least  2 topics are required")
});