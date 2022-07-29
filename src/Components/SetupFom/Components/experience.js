import { Container, TextField } from "@material-ui/core";
import useStyles from "../styles";
const Experience = ({ formik, hasError }) => {
  const classes = useStyles();
  return (
    <Container disableGutters className={classes.item} >
      <TextField
        required
        name="company"
        error = {hasError.company}
        label="Company"
        variant="outlined"
        className= {classes.textField}
        onChange={formik.handleChange}
        value={formik.values.experience.company}
      />
      <TextField
        required
        name="role"
        label="Role"
        className= {classes.textField}
        error = {hasError.role}
        variant="outlined"
        onChange={formik.handleChange}
        value={formik.values.experience.role}
      />
    </Container>
  );
};

export default Experience;
