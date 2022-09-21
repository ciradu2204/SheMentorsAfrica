import { Box, Card, IconButton, Typography } from "@material-ui/core";
import { useFormik } from "formik";
import useStyles from "./styles";
import { Stepper, Step } from "react-form-stepper";
import { useState } from "react";
import StepWizard from "react-step-wizard";
import PersonalInformation from "./generalInfo";
import Experience from "./experience";
import Availability from "./availability";
import Interest from "./interest";
import CloseIcon from "@material-ui/icons/Close";
import { useNavigate } from "react-router-dom";
import { API , Auth} from "aws-amplify";
import { Alert } from "@mui/material";


const SetUpForm = ({ user, profile, setProfile, updateForm }) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [stepWizard, setStepWizard] = useState();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("")

  const initialValue = {
    profileImage: {
      name: "",
      file: {},
    },
    fullName: user.attributes.name,
    role: "",
    bio: "",
    country: "",
    languages: [],
    areasOfExpertise: [],
    mentorshipTopics: [],
    level: "",
    education: {
      school: "",
      degree: "",
    },
    experience: {
      company: "",
      role: "",
    },
    connect: {
      linkedIn: "",
      twitter: "",
      personalWebsite: "",
    },
    availability: [
      {
        startDate: null,
        endDate: null,
      },
    ],
  };


  const createProfile = async () => {
    const credentials = await Auth.currentUserCredentials(); 
    const token = user.signInUserSession.idToken.jwtToken;
    let profile = {
      ...formik.values,
      sub: user.attributes.sub,
      email: user.attributes.email,
      userName: user.username,
      identityId: credentials.identityId
    };
    const requestInfo = {
      headers: {Authorization: token },
      body: { profile: profile },
    };
    try {
      await API.post("profileApi", "/profiles", requestInfo);
      setProfile(requestInfo.body);
    } catch (error) {
      setError(error.message);
      setLoading(false);
      return "";
    }
  };
  const updateProfile = async () => {

    const token = user.signInUserSession.idToken.jwtToken;
    let profile = { ...formik.values };
    const requestInfo = {
      headers: { Authorization: token },
      body: { profile: profile },
    };

    try {
      await API.put("profileApi", "/profiles", requestInfo);
      setProfile(requestInfo.body);
    } catch (error) {
      setError(error.message);
      setLoading(false);
      return "";
    }
  };
  const assignStepWizard = (instance) => {
    setStepWizard(instance);
  };

  const handleStepChange = (e) => {
    setActiveStep(e.activeStep - 1);
  };
  const onComplete = async() =>{
    setLoading(true);
      if (profile == null) {
       await createProfile();
     } else {
       await updateProfile();
     }
     setLoading(false)
     updateForm(false);
     navigate("auth/mentors");
    
   
  }
  const formik = useFormik({
    initialValues: profile === null ? initialValue: profile?.profile,
  });

  const handleClose = () => {
    updateForm(false);
  };

  return (
    <Card className={classes.card}>
      {profile !== null &&  <Box className={classes.closeIconBox}><IconButton
        aria-label="close"
        onClick={handleClose}
        className={classes.closeIcon}
      >
        <CloseIcon  />
      </IconButton></Box>}
      
      <Typography variant="h5" className={classes.title}>
        Tell us a little bit about yourself!
      </Typography>

      <Typography variant="subtitle1">
        To better suit your needs, let us know your expectation!{" "}
      </Typography>
      <Stepper
        activeStep={activeStep}
        connectorStyleConfig={{ activeColor: "E49433" }}
        styleConfig={{ activeBgColor: "#E49433", completedBgColor: "#E49433" }}
        className={classes.stepper}
      >
        <Step label="Personal Detail" />
        <Step label="Interests" />
        {(formik.values.role === "" || formik.values.role === "Mentee") && (
          <Step label="Education" />
        )}
        {formik.values.role === "Mentor" && <Step label="Experience" />}
        {formik.values.role === "Mentor" && <Step label="Availability" />}
      </Stepper>
      {error.length > 0 && (
        <Alert severity="error" className={classes.error}>
          {error}
        </Alert>
      )}
      <StepWizard
        instance={assignStepWizard}
        onStepChange={handleStepChange}
        isLazyMount={true}
        className={classes.stepWizard}
      >
        <PersonalInformation
          user={user}
          formik={formik}
          stepName={"personalInfo"}
        />
        <Interest formik={formik} stepName={"Interest"} />
        <Experience
          formik={formik}
          stepName={"experience"}
          onComplete={onComplete}
          loading={loading}
        />
        {formik.values.role === "Mentor" && (
  
          <Availability formik={formik} stepName={"availability"} onComplete={onComplete} loading={loading}/>
        )}
      </StepWizard>
    </Card>
  );
};

export default SetUpForm;
