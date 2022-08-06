import { Box, Card, IconButton } from "@material-ui/core";
import Close from "@material-ui/icons/Close";
import {useNavigate} from "react-router-dom"
import { useFormik } from "formik";
import { useState } from "react";
import StepWizard from "react-step-wizard";
import BookTime from "./bookTime";
import GeneralInfo from "./generalInfo"
import useStyles from "./style";
import { API} from "aws-amplify"
import { Alert } from "@mui/material";

const BookingForm = ({ user, profile,  mentorProfile, setMentorProfile, setBookingFormOpen}) => {
const [stepWizard, setStepWizard] = useState();
const classes  = useStyles()
const [loading, setLoading] = useState(false)
const [error, setError]  = useState("")
const initialValue = {
    areasOfExpertise: [], 
    mentorshipTopics: [], 
    bio: "", 
    bookedTime: null,
}
const navigate = useNavigate()
const formik = useFormik({
    initialValues: initialValue
});
const assignStepWizard = (instance) => {
    setStepWizard(instance);
};

const handleClose = () => {
    setBookingFormOpen(false);
    formik.resetForm()
}

const createBooking = async () => {
    const token = user.signInUserSession.idToken.jwtToken;
    let booking = {
      mentorEmail: mentorProfile.profile.email,
      menteeEmail: profile.profile.email, 
      status: "pending", 
      areasOfExpertise: formik.values.areasOfExpertise,
      mentorshipTopics: formik.values.mentorshipTopics, 
      mentorId: mentorProfile.profile.sub, 
      mentorProfileImage: mentorProfile.profile.profileImage, 
      menteeId: profile.profile.sub, 
      reason: formik.values.bio, 
      bookedTime: formik.values.bookedTime.startTime, 
      mentorTitle: mentorProfile.profile.experience.role, 
      mentorName: mentorProfile.profile.fullName,
      menteeTitle: profile.profile.role === "Mentee"? `${mentorProfile.profile.education.degree} student`:  mentorProfile.profile.experience.role
    };
    const requestInfo = {
      headers: { Authorization: token },
      body: { booking: booking },
    };
    console.log(requestInfo)
    try {
      const result =  await API.post("profileApi", "/bookings", requestInfo);
      console.log(result)
    } catch (error) {
      setError(error.message);
      setLoading(false);
      return "";
    }
};



const updateMentorProfile = async () => {
    let newAvailability = []
    console.log(formik.values.bookedTime.splitTimeslot[1])
    if(formik.values.bookedTime.splitTimeslot[0] === null && formik.values.bookedTime.splitTimeslot[1] !== null ){
        newAvailability = mentorProfile.profile.availability.map((obj) => {
            if(obj.id === formik.values.bookedTime.availableTimeslot.id){
                   return {id: obj.id, start: formik.values.bookedTime.splitTimeslot[1].startTime, end: formik.values.bookedTime.splitTimeslot[1].endTime, allDay: false, title: '' }
            }else{
                return obj
            }
        
     })
    }else{
             newAvailability = mentorProfile.profile.availability.filter((obj) => {
             return obj.id !== formik.values.bookedTime.availableTimeslot.id
       })
    }
    console.log(newAvailability)
    const token = user.signInUserSession.idToken.jwtToken;
    let profile = { ...mentorProfile.profile, availability: [...newAvailability]};
    const requestInfo = {
      headers: { Authorization: token },
      body: { profile: profile },
    };
    setLoading(false)


    try {
      await API.put("profileApi", "/profiles", requestInfo);
      setMentorProfile(requestInfo.body)
    } catch (error) {
      setError(error.message);
      setLoading(false);
      return "";
    }
  };

const onComplete = async () =>{
    setLoading(true)
    await createBooking()
    await updateMentorProfile() 
    navigate("/bookings")
    setLoading(false)
    setBookingFormOpen(false);
}

return (
    <Card className={classes.card} >
        <Box className={classes.cancelBox}>
        <IconButton className={classes.cancel} disable={loading} disableFocusRipple onClick={handleClose}><Close /></IconButton></Box>
        {error.length > 0 && (<Alert severity="error" className={classes.error}>
        {error}
        </Alert>)}
        <StepWizard instance={assignStepWizard}>
          <GeneralInfo formik={formik}  mentorProfile={mentorProfile} loading={loading}/>
          <BookTime formik={formik} mentorProfile={mentorProfile} onComplete={onComplete} loading={loading} />
        </StepWizard>
    </Card> 
)
}

export default BookingForm; 