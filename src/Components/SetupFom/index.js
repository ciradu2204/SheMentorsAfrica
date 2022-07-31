import { Card, Typography } from "@material-ui/core";
import { useFormik } from "formik";
import useStyles from "./styles";
import { Stepper, Step } from "react-form-stepper";
import { useState } from "react";
import StepWizard from "react-step-wizard";
import PersonalInformation from "./Steps/generalInfo";
import Experience from "./Steps/experience";
import Availability from "./Steps/availability";
import Interest from "./Steps/interest";
import {API} from "aws-amplify";
import { useNavigate } from "react-router-dom";
import { Alert } from "@mui/material";

const SetUpForm = ({ user, setLoading, setFormOpen }) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [stepWizard, setStepWizard] = useState();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const assignStepWizard = (instance) => {
    setStepWizard(instance);
  };

  const handleStepChange = (e) => {
    setActiveStep(e.activeStep - 1);
  };

  const onComplete = async (e) => {
    const token = user.signInUserSession.idToken.jwtToken;
    const requestInfo = {
      headers: {Authorization: token}, 
      body: {profile : formik.values}
    }
    try {
      setLoading(true);
       await API.post("profileApi", "/profiles", requestInfo);
      setLoading(false);
      setFormOpen(false)
      navigate('/dashboard'); 
    } catch (error) {
      setLoading(false);
      setError(error.message)
    }
  

  };

  const formik = useFormik({
    initialValues: {
      profileImage: {
        name: "",
        file: {},
      },
      profileImageUrl: null,
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
    },
  });

  return (
    <Card className={classes.card}>
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
      <StepWizard
        instance={assignStepWizard}
        onStepChange={handleStepChange}
        isLazyMount={true}
        className={classes.stepWizard}
      >
        {error.length > 0 &&  (
          <Alert severity="error" className={classes.error}>{error}</Alert>
        )}
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
        />
        <Availability
          formik={formik}
          stepName={"availability"}
          onComplete={onComplete}
        />
      </StepWizard>
    </Card>
  );
};

export default SetUpForm;
