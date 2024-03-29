import * as yup from "yup";
export const bookingGeneralInfo = yup.object({
    bio: yup.string().required("Description is need").min(150, "The description should be 150 characters at least"), 
    areasOfExpertise: yup.array().required("Skill is needed").min(1, "Minimum 2").max(2, "Maximum 2"), 
    mentorshipTopics: yup.array().required("A Mentorship topic is required").min(1, "Minimum 2").max(2, "Maximum 2"),
});