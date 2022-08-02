import MentorshipTopics from "../Components/mentorshipTopics";
import { CardContent, Container } from "@material-ui/core";
import AreasOfExpertise from "../Components/areasOfExpertise";
import ActionButtons from "../Components/actionButtons";
import Level from "../Components/level";
import useStyles from "../styles";
import Role from "../Components/role";
import {menteeInterestSchema, mentorInterestSchema } from "../../../Validations/interests";
import { useState } from "react";
import { Alert } from "@mui/material";
const Interest = ({ formik, ...props }) => {
  const classes = useStyles();
  const [error, setError] = useState("");
  const initial = {
    level: false,
    role: false,
    mentorshipTopics: false,
    areasOfExpertise: false,
  };
  const [hasError, setHasError] = useState(initial);

  const formData = {
    level: formik.values.level,
    role: formik.values.role,
    areasOfExpertise: formik.values.areasOfExpertise,
    mentorshipTopics: formik.values.mentorshipTopics,
  };

  const validate = async () => {
    try {
        if(formik.values.role === "Mentor"){
          await mentorInterestSchema.validate(formData);
        }else{
          await menteeInterestSchema.validate(formData);
        }
        props.goToNamedStep("experience"); 
    } catch (error) {
      console.log(error);
      setError(error.message);
      let value = error.path;
      setHasError({ ...initial, [`${value}`]: true });
    }
  };

  return (
    <Container disableGutters className={classes.container}>
        {error.length > 0 && (<Alert severity="error" className={classes.error}>
          {error}</Alert>)}
      <CardContent className={classes.cardContent}>
        <Role formik={formik} hasError={hasError} />
        <AreasOfExpertise formik={formik}  hasError={hasError}/>
        {formik.values.role === "Mentor" && <Level formik={formik} hasError={hasError} /> } 
        {formik.values.role !== "" && <MentorshipTopics formik={formik} hasError={hasError} />}
      </CardContent>
      <ActionButtons {...props} nextStep={validate} />
    </Container>
  );
};

export default Interest;
