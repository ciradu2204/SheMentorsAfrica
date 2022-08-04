import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core"
import useStyles from "./styles"
const SortBy =  ({formik, hasError,  required=true, label="label", focused=false}) => {
      const classes = useStyles(); 
    return (
        <FormControl variant="outlined" fullWidth  className={classes.formControl} required={required} focused={focused} >
        <InputLabel id="sortBy-label" classes={{
                 root: label === "label" ? classes.label: classes.labelDashboard
        }}>Sort By</InputLabel>
        <Select
          labelId="sortBy-label"
          id="select-sortBy"
          name="sortBy"
          error= {hasError.sortBy}
          value={formik.values.sortBy}
          label="Sort By"
          onChange={formik.handleChange}
          inputProps={{
            classes: {
                icon: classes.icon,
            },
        }}
        >
          <MenuItem value="popular">Popular</MenuItem>
          <MenuItem value="recent">Most Recent</MenuItem>
          <MenuItem value="old">Old</MenuItem>

        </Select>
      </FormControl>
    )

}

export default SortBy; 