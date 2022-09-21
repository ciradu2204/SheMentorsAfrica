import {
    Box,
    Chip,
    FormControl,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Select,
  } from "@material-ui/core";
  import useStyles from "./styles";

const MentorshipTopics = ({formik, hasError, user, required=true, label="label", focused=false, fullWidth=false}) => {
  const authenticated = user === null;
  const props =  {
    page: authenticated,
    fullWidth
  }
  const classes = useStyles(props);
  const MentorshipTopics = [
        "Code Review", 
         "Mock Interview",
         "Technical Writing", 
         "Public Speaking", 
         "Secure first Job", 
         "Resume & CV review", 
         "Salary Negotiation"
     ]


    return (

        <FormControl variant="outlined" fullWidth className={classes.item} required={required} focused={focused}>
        <InputLabel id="mentorshipTopics-label" classes={{
                 root: label === "label" ? classes.label: classes.labelDashboard
        }}>{formik.values.role === "Mentor"? "Mentoring Topics":"I’d love some help with"}</InputLabel>
        <Select
          labelId="mentorshipTopics-label"
          id="select-mentorshipTopics"
          name="mentorshipTopics"
          multiple
          error={hasError.mentorshipTopics}
          value={formik.values.mentorshipTopics}
          label="Mentorship Topics"
          onChange={formik.handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          inputProps={{
            classes: {
                icon: classes.icon,
            },
        }}
        >
          {MentorshipTopics.sort().map((topic) => (
            <MenuItem key={topic} value={topic}>
              {topic}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

    )

}

export default MentorshipTopics; 