import { Container, TextField } from "@material-ui/core";
import useStyles from "./styles";
const Experience = ({ formik, hasError, required=true, fullWidth=false }) => {
  const props = {
    fullWidth
  }
  const classes = useStyles(props);
  return (
    <Container disableGutters className={classes.item} >
        <TextField
        required={required}
        name="experience.role"
        label="Job Title"
        className= {classes.textField}
        error={hasError.experience.role}
        variant="outlined"
        onChange={formik.handleChange}
        value={formik.values.experience.role}
      />
      <TextField
        required={required}
        name="experience.company"
        error={hasError.experience.company}
        label="Employer"
        variant="outlined"
        className= {classes.textField}
        onChange={formik.handleChange}
        value={formik.values.experience.company}
      />
    
    </Container>
  );
};

export default Experience;
