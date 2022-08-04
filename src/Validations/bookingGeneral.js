import * as yup from "yup";
export const bookingGeneralInfo = yup.object({
    bio: yup.string().required("Description is need").min(150, "The description should be 150 characters at least"), 
    areasOfExpertise: yup.string().required("Skill is needed"), 
    mentorshipTopics: yup.string().required("Mentorship topic")
});