import { Box, Card, CardContent, IconButton, Typography } from "@material-ui/core";
import { useFormik } from "formik";
import useStyles from "./styles";
import { Stepper, Step } from "react-form-stepper";
import { useState } from "react";
import StepWizard from "react-step-wizard";
import PersonalInformation from "./Steps/generalInfo";
import Experience from "./Steps/experience";
import Availability from "./Steps/availability";
import Interest from "./Steps/interest";
import CloseIcon from "@material-ui/icons/Close";

const SetUpForm = ({ user, profile, setProfile, updateForm }) => {
  console.log(profile === null);
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [stepWizard, setStepWizard] = useState();
  const initialValue = {
    profileImage: {
      name: "",
      file: {},
    },
    userName: user.attributes.name,
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
  const assignStepWizard = (instance) => {
    setStepWizard(instance);
  };

  const handleStepChange = (e) => {
    setActiveStep(e.activeStep - 1);
  };

  const formik = useFormik({
    initialValues: profile === null ? initialValue: profile.profile,
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
          user={user}
          updateForm={updateForm}
          setProfile={setProfile}
          profile={profile}
        />
        {formik.values.role === "Mentor" && (
          <Availability
            formik={formik}
            stepName={"availability"}
            updateForm={updateForm}
            user={user}
            setProfile={setProfile}
            profile={profile}
          />
        )}
      </StepWizard>
    </Card>
  );
};

export default SetUpForm;
