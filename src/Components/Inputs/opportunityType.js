import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core"
import useStyles from "./styles"
const OpportunityType = ({formik, hasError,  required=true, label="label", focused=false}) => {
    const classes = useStyles(); 

    return (

        <FormControl variant="outlined" fullWidth  className={classes.item} required={required} focused={focused} >
        <InputLabel id="opportunityType-label" classes={{
                 root: label === "label" ? classes.label: classes.labelDashboard
        }}>Opportunity Type</InputLabel>
        <Select
          labelId="opportunityType-label"
          id="select-opportunityType"
          name="opportunityType"
          error= {hasError.opportunityType}
          value={formik.values.opportunityType}
          label="Opportunity Type"
          onChange={formik.handleChange}
          inputProps={{
            classes: {
                icon: classes.icon,
            },
        }}
        >
          <MenuItem value="Internships">Internships</MenuItem>
          <MenuItem value="Entry Level">Entry Level</MenuItem>
          <MenuItem value="Bootcamps">Bootcamps</MenuItem>
          <MenuItem value="Community">Community</MenuItem>
          <MenuItem value="Events">Events</MenuItem>
        </Select>
      </FormControl>
    )


}

export default OpportunityType; 