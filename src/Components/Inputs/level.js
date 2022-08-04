import {FormControl, InputLabel, MenuItem, Select} from "@material-ui/core"
import useStyles from "./styles";

const Level = ({formik, hasError,  required=true, label="label", focused=false}) => {
    const classes = useStyles(); 

    return (

        <FormControl variant="outlined" fullWidth  className={classes.formControl} required={required} focused={focused}>
        <InputLabel id="level-label" classes={{
                 root: label === "label" ? classes.label: classes.labelDashboard
        }}>Level</InputLabel>
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
          <MenuItem value="1-3 yrs">Junior(1-3 yrs of experience)</MenuItem>
          <MenuItem value="3-5 yrs">Mid level (3-5 yrs of experience)</MenuItem>
          <MenuItem value="5-10 yrs">Senior (&gt;5 yrs of experience)</MenuItem>

        </Select>
      </FormControl>
    )

}

export default Level; 