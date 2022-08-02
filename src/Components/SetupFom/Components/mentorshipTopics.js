import {
    Box,
    Chip,
    FormControl,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Select,
  } from "@material-ui/core";
  import useStyles from "../styles";

const MentorshipTopics = ({formik, hasError}) => {
     const classes = useStyles(); 

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

        <FormControl variant="outlined" fullWidth className={classes.formControl} required>
        <InputLabel id="mentorshipTopics-label">{formik.values.role === "Mentor"? "Mentoring Topics":"I’d love some help with"}</InputLabel>
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