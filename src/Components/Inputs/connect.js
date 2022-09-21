import { Container, TextField } from "@material-ui/core";
import useStyles from "./styles";

const Connect = ({ formik, hasError,  required= true, fullWidth=false }) => {
  const props = {
    fullWidth
  }
  const classes = useStyles(props);

  return (
    <Container className={classes.item} disableGutters>
      <TextField
        required={required}
        name="connect.linkedIn"
        label="LinkedIn Url"
        variant="outlined"
        onChange={formik.handleChange}
        className= {classes.textField}
        error={hasError.connect.linkedIn}
        value={formik.values.connect.linkedIn}
      />
      <TextField
        name="connect.twitter"
        label="Twitter Url"
        variant="outlined"
        className= {classes.textField}
        onChange={formik.handleChange}
        value={formik.values.connect.twitter}
      />
      <TextField
        name="connect.personalWebsite"
        label="Personal Website Url"
        variant="outlined"
        className= {classes.textField}
        onChange={formik.handleChange}
        value={formik.values.connect.personalWebsite}
      />
    </Container>
  );
};

export default Connect;
