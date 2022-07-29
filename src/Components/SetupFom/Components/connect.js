import { Container, TextField } from "@material-ui/core";
import useStyles from "../styles";

const Connect = ({ formik, hasError }) => {
  const classes = useStyles();

  return (
    <Container className={classes.item} disableGutters>
      <TextField
        required
        name="linkedIn"
        label="LinkedIn"
        variant="outlined"
        onChange={formik.onChange}
        className= {classes.textField}
        error={hasError.linkedIn}
        value={formik.values.connect.linkedIn}
      />
      <TextField
        name="twitter"
        label="Twitter"
        variant="outlined"
        className= {classes.textField}
        onChange={formik.onChange}
        value={formik.values.connect.twitter}
      />
      <TextField
        name="personalWebsite"
        label="Personal Website"
        variant="outlined"
        className= {classes.textField}
        onChange={formik.onChange}
        value={formik.values.connect.personalWebsite}
      />
    </Container>
  );
};

export default Connect;
