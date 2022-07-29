import { Container, TextField } from "@material-ui/core";
import useStyles from "../styles";
const Experience = ({ formik }) => {
  const classes = useStyles()
  return (
      <Container disableGutters className={classes.item}>
      <TextField name="company" label="Company" variant="outlined" onChange={formik.handleChange} value={formik.values.experience.company}/>
      <TextField name="role" label="Role" variant="outlined" onChange={formik.handleChange} value={formik.values.experience.role}/>
      </Container>

  );
};

export default Experience;