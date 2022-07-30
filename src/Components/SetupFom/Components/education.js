import { Container, TextField } from "@material-ui/core";
import useStyles from "../styles";
const Education = ({ formik, hasError }) => {
  const classes = useStyles();
  return (
    <Container className={classes.item} disableGutters>
      <TextField
        required
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
        required
        fullWidth
        className= {classes.textField}
        name="education.degree"
        label="Degree"
        variant="outlined"
        error={hasError.education.degree}
        onChange={formik.handleChange}
        value={formik.values.education.degree}
      />
    </Container>
  );
};

export default Education;
