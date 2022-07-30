import { Container, TextField } from "@material-ui/core";
import useStyles from "../styles";
const Experience = ({ formik, hasError }) => {
  const classes = useStyles();
  return (
    <Container disableGutters className={classes.item} >
        <TextField
        required
        name="experience.role"
        label="Job Title"
        className= {classes.textField}
        error={hasError.experience.role}
        variant="outlined"
        onChange={formik.handleChange}
        value={formik.values.experience.role}
      />
      <TextField
        required
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
