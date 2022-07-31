import {FormControl, InputLabel, MenuItem, Select} from "@material-ui/core"
import useStyles from "../styles";

const Level = ({formik, hasError}) => {
    const classes = useStyles(); 

    return (

        <FormControl variant="outlined" fullWidth  className={classes.formControl} required>
        <InputLabel id="level-label">Level</InputLabel>
        <Select
          labelId="level-label"
          id="select-level"
          name="level"
          error= {hasError.level}
          value={formik.values.level}
          label="level"
          onChange={formik.handleChange}
          inputProps={{
            classes: {
                icon: classes.icon,
            },
        }}
        >
          <MenuItem value="Junior">Junior(0-3 yrs of experience)</MenuItem>
          <MenuItem value="Mid">Mid level (3-5 yrs of experience)</MenuItem>
          <MenuItem value="Senior">Senior (&gt;5 yrs of experience)</MenuItem>

        </Select>
      </FormControl>
    )

}

export default Level; 