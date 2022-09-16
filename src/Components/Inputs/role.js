import {FormControl, InputLabel, MenuItem, Select} from "@material-ui/core"
import useStyles from "./styles";

const Role = ({formik, hasError,  required=true, focused=false}) => {
    const classes = useStyles(); 

    return (

        <FormControl variant="outlined" fullWidth  className={classes.item} required={required} focused={focused}>
        <InputLabel required id="role-label">I am using She Mentors Africa to</InputLabel>
        <Select
          labelId="role-label"
          id="select-role"
          name="role"
          error={hasError.role}
          value={formik.values.role}
          label="I am using She Mentors Africa to *"
          onChange={formik.handleChange}
          inputProps={{
            classes: {
                icon: classes.icon,
            },
        }}
        >
          <MenuItem value="Mentor">Mentor (Employed)</MenuItem>
          <MenuItem value="Mentee">Be Mentored (Unemployed)</MenuItem>
        </Select>
      </FormControl>
    )

}

export default Role; 