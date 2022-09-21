import {CardContent, Container, Typography } from "@material-ui/core";
import { Alert } from "@mui/material";
import { useState } from "react";
import { bookingGeneralInfo } from "../../Validations/bookingGeneral";
import AreasOfExpertise from "../Inputs/areasOfExpertise";
import MentorshipTopics from "../Inputs/mentorshipTopics";
import TextArea from "../Inputs/textArea";
import ActionButtons from "../SetupFom/actionButtons";
import useStyles from "./style";

const GeneralInfo = ({mentorProfile, formik, ...props}) =>{
    const initial = {
        areasOfExpertise: false, 
        mentorshipTopics: false,
        bio: false,
    }
    const classes = useStyles()
    const [error, setError] = useState("")
    const [hasError, setHasError] = useState(initial)
     const formData = {
        areasOfExpertise: formik.values.areasOfExpertise,
        mentorshipTopics: formik.values.mentorshipTopics, 
        bio: formik.values.bio
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
        <CardContent className={classes.cardContent}>
        {error.length > 0 && (<Alert severity="error" className={classes.error}>
        {error}
        </Alert>)}
        <Typography variant="h5" className={classes.title}>Book a session with <Typography component="span" variant="h6" className={classes.mentorName}>{mentorProfile?.profile?.fullName}</Typography> </Typography>
        <AreasOfExpertise formik={formik}  hasError={hasError}/>
        <MentorshipTopics formik={formik}  hasError={hasError} />
        <TextArea formik={formik} label="Where do you need help" hasError={hasError}/>
        </CardContent>
        <ActionButtons {...props} nextStep={validate} />
        </Container>
    )


}

export default GeneralInfo; 