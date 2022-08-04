import {Container, TextField, Typography } from "@material-ui/core";
import { Alert } from "@mui/material";
import { useState } from "react";
import { bookingGeneralInfo } from "../../Validations/bookingGeneral";
import AreasOfExpertise from "../Inputs/areasOfExpertise";
import MentorshipTopics from "../Inputs/mentorshipTopics";
import TextArea from "../Inputs/textArea";
import ActionButtons from "../SetupFom/actionButtons";
import useStyles from "./style";

const GeneralInfo = ({mentorsProfile, formik, ...props}) =>{
    const initial = {
        areasOfExpertise: false, 
        mentorshipTopics: false,
        bio: false,
    }
    const classes = useStyles()
    const [error, setError] = useState("")
    const [hasError, setHasError] = useState(initial)

    const formData = {
        areasOfExpertise: formik.areasOfExpertise,
        mentorshipTopics: formik.mentorshipTopics, 
        bio: formik.bio
    }

    const validate = async () => {
        try{
          await bookingGeneralInfo.validate(formData)
          props.nextStep()
        }catch(error){
          setError("");     
          setError(error.message)
          let value = error.path
          setHasError({...initial, [`${value}`]: true})
        }
  
  
        
     }

    return (
        <Container>
        {error.length > 0 && (<Alert severity="error" className={classes.error}>
        {error}
        </Alert>)}
        <Typography variant="h6">Book a Session with {mentorsProfile?.profile?.fullName} </Typography>
        <AreasOfExpertise formik={formik} multiple={false} hasError={hasError}/>
        <MentorshipTopics formik={formik} multiple={false} hasError={hasError} />
        <TextArea formik={formik} label="Where do you need help" hasError={hasError}/>
        <ActionButtons {...props} nextStep={validate} />
        </Container>
    )


}

export default GeneralInfo; 