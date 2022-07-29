import {FormControl, InputLabel, MenuItem, Select} from "@material-ui/core"
import useStyles from "../styles";

const Level = ({formik}) => {
    const classes = useStyles(); 

    return (

        <FormControl variant="outlined" fullWidth  className={classes.item}>
        <InputLabel id="level-label">Level</InputLabel>
        <Select
          labelId="level-label"
          id="select-level"
          name="level"
          value={formik.values.level}
          label="level"
          onChange={formik.handleChange}
          inputProps={{
            classes: {
                icon: classes.icon,
            },
        }}
        >
          <MenuItem value="0">Student</MenuItem>
          <MenuItem value="1-2">Junior(1-2 yrs of experience)</MenuItem>
          <MenuItem value="3-5">Mid level (3-5 yrs of experience)</MenuItem>
          <MenuItem value="5">Senior (&gt;5 yrs of experience)</MenuItem>

        </Select>
      </FormControl>
    )

}

export default Level; 