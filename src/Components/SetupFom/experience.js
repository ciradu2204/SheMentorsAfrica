import { CardContent, Container } from "@material-ui/core";
import ActionButtons from "./actionButtons";
import Connect from "../Inputs/connect";
import Education from "../Inputs/education";
import useStyles from "./styles";
import {
  menteeExperienceShema,
  mentorExperienceShema,
} from "../../Validations/experience";
import { useState } from "react";
import { Alert } from "@mui/material";
import Experience from "../Inputs/experience";

const ExperienceStep = ({ formik, onComplete, loading, ...props }) => {
  const classes = useStyles();
  const [error, setError] = useState("");
  const initial = {
    education:{
      school: false,
      degree: false,
    },
    experience:{
      company: false, 
      role: false,
    },
    connect:{
       linkedIn: false,
    }
  };
  const [hasError, setHasError] = useState(initial);

  const formData = {
    education: formik.values.education,
    connect: formik.values.connect,
    experience: formik.values.experience
  };

  const validateMentor = async () => {
    try {
        await mentorExperienceShema.validate(formData);
        props.nextStep()
    } catch (error) {
      setError({error});
      let value = error.path.split(".");
      setHasError(prevState => ({ ...initial, [`${value[0]}`]:{...prevState, [`${value[1]}`]: true}  }));
    }
  };

  const validateMentee = async () => {
    try {
      await menteeExperienceShema.validate(formData);
      props.lastStep()
      onComplete()
    } catch (error) {
      setError({error});
      let value = error.path.split(".");
      setHasError(prevState => ({ ...initial, [`${value[0]}`]:{...prevState, [`${value[1]}`]: true}  }));
    }
  }

  return (
    <Container disableGutters className={classes.container}>
      {error.length > 0 && (
        <Alert severity="error" className={classes.error}>
          {error}
        </Alert>
      )}
      <CardContent className={classes.cardContent}>
        {formik.values.role === "Mentee" && (
          <Education formik={formik} hasError={hasError} />
        )}
        {formik.values.role === "Mentor" && (
          <Experience formik={formik} hasError={hasError} />
        )}
        <Connect formik={formik} hasError={hasError} />
      </CardContent>
      <ActionButtons {...props} lastStep={validateMentee} nextStep={validateMentor} loading={loading}/>
    </Container>
  );
};
export default ExperienceStep;
