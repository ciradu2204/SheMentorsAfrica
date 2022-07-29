import { Card, Typography } from "@material-ui/core";
import { useFormik } from "formik";
import useStyles from "./styles";
import { Stepper, Step } from "react-form-stepper";
import { useState } from "react";
import StepWizard from "react-step-wizard";
import PersonalInformation from "./Steps/generalInfo";
import Experience from "./Steps/experience";
import Availability from "./Steps/availability";

const SetUpForm = ({ user }) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [stepWizard, setStepWizard] = useState();

  const assignStepWizard = (instance) => {
    setStepWizard(instance);
  };

  const handleStepChange = (e) => {
    setActiveStep(e.activeStep - 1);
  };



  const formik = useFormik({
    initialValues: {
      profileImage: {},
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
         degree: ""
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
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Card className={classes.card}>
      <Typography variant="h5" className={classes.title}>Tell us a little bit about yourself!</Typography> 
      <Typography variant="subtitle1" >To better suit your needs, let us know your expectation! </Typography> 
      <Stepper activeStep={activeStep}  connectorStyleConfig={{  activeColor:"E49433" }}
        styleConfig={{ activeBgColor:"#E49433", completedBgColor: "#E49433" }} className={classes.stepper}>
        <Step label="Personal Detail"  />
        <Step label="Experience" activeBgColor="#E49433" />
        <Step label="Availability" activeBgColor="#E49433" />
      </Stepper>
      <StepWizard
        instance={assignStepWizard}
        onStepChange={handleStepChange}
        isLazyMount={true}
        className={classes.stepWizard}
      >
        <PersonalInformation user={user} formik={formik} />
        <Experience formik={formik} />
        <Availability formik={formik} />
      </StepWizard>
    </Card>
  );
};

export default SetUpForm;
