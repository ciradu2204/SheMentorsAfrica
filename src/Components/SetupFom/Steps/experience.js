import { CardContent, Container } from "@material-ui/core";
import ActionButtons from "../Components/actionButtons";
import Connect from "../Components/connect";
import Education from "../Components/education";
import useStyles from "../styles";
import { menteeExperienceShema, mentorExperienceShema } from "../../../Validations/experience";
import { useState } from "react";
import { Alert } from "@mui/material";

const Experience = ({ formik, ...props }) => {
  const classes = useStyles();
  const [error, setError] = useState("");
  const initial = {
    school: false,
    company: false,
    linkedIn: false,
    degree: false,
    role: false
  };
  const [hasError, setHasError] = useState(initial);

  const formData = {
    experience: formik.values.experience,
    Education: formik.values.Education,
    connect: formik.values.connect
  };

  const validate = async () => {
    try {
      if (formik.values.role === "Mentee") {
        await menteeExperienceShema.validate(formData);
         //submit
      } else {
        await mentorExperienceShema.validate(formData);
        props.goToNamedStep("availability");

      }
    } catch (error) {
      setError(error.message);
      let value = error.path;
      setHasError({ ...initial, [`${value}`]: true });
    }
  };

  return (
    <Container disableGutters className={classes.container}>
       {error.length > 0 && (<Alert variant="outlined" severity="error" className={classes.error}>
  {error}
</Alert>)}
      <CardContent className={classes.cardContent}>
        {formik.values.role === "Mentee" && (<Education formik={formik} hasError= {hasError} />)}
        {formik.values.role === "Mentor" && (<Experience formik={formik} hasError= {hasError} />)}
         <Connect formik={formik} hasError={hasError} />  
      </CardContent>
      <ActionButtons {...props} nextStep={validate} />
    </Container>
  );
};
export default Experience;
