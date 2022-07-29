import { Container, TextField } from "@material-ui/core";
import useStyles from "../styles";
const Education = ({ formik }) => {
    const classes = useStyles(); 
  return (
      <Container className={classes.item} >
      <TextField name="university" label="University" variant="outlined" onChange={formik.handleChange} value={formik.values.school}/>
      </Container>
  );
};

export default Education;
