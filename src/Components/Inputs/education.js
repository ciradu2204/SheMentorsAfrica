import { Container, TextField } from "@material-ui/core";
import useStyles from "./styles";
const Education = ({ formik, hasError, required=true}) => {
  const classes = useStyles();
  return (
    <Container className={classes.item} disableGutters>
      <TextField
        required={required}
        fullWidth
        name="education.school"
        label="School"
        variant="outlined"
     
        className= {classes.textField}
        error={hasError.education.school}
        onChange={formik.handleChange}
        value={formik.values.education.school}
      />
       <TextField
        required={required}
        fullWidth
        className= {classes.textField}
        name="education.degree"
        label="Specialization"
        variant="outlined"
        error={hasError.education.degree}
        onChange={formik.handleChange}
        value={formik.values.education.degree}
      />
    </Container>
  );
};

export default Education;
