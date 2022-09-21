import { TextField } from "@material-ui/core";
import useStyles from "./styles";
const TextArea = ({formik, hasError, label="What inspired you to join tech?", fullWidth=false}) => {
  const props = {
    fullWidth
  }
  const classes = useStyles(props)
    return (
        <TextField
        required
        label={label}
        multiline
        name="bio"
        value={formik.values.bio}
        onChange={formik.handleChange}
        minRows={6}
        maxRows={6}
        error={hasError.bio}
        className={classes.item}
        variant="outlined"
      />
    )


}

export default TextArea; 