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
const AreasOfExpertise = ({ formik, hasError, required=true, user, label="label", focused=false}) => {
  const authenticated = user === null;
  const props = {
    page: authenticated
  }
  const classes = useStyles(props);

  const AreasOfExpertise = [
    "Frontend Development",
    "Backend development",
    "Cloud Computing",
    "DevOps",
    "UI/UX",
    "CyberSecurity",
    "Data Analytics",
    "AI/ML", 
    "Mobile App Development", 
    "Python", 
    "JavaScript", 
    "Java", 
    "Go", 
    "R", 
    "C++", 
    "c#", 
    "Swift", 
    "PHP", 
    "Kotlin", 
    "Dart", 

  ];

  return (
    <FormControl variant="outlined" fullWidth className={classes.item} required={required} focused={focused}>
      <InputLabel id="areaOfExpertise-label" classes={{
                 root: label === "label" ? classes.label: classes.labelDashboard
        }}>Skills</InputLabel>
      <Select
        labelId="areaOfExpertise-label"
        id="select-areaOfExpertise"
        name="areasOfExpertise"
        multiple
        value={formik.values.areasOfExpertise}
        onChange={formik.handleChange}
        error= {hasError.areasOfExpertise}
        inputProps={{
          classes: {
              icon: classes.icon,
          },}}
        input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
        renderValue={(selected) => (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
            {selected.map((value) => (
              <Chip key={value} label={value} />
            ))}
          </Box>
        )}
      >
        {AreasOfExpertise.sort().map((areaOfExpertise) => (
          <MenuItem key={areaOfExpertise} value={areaOfExpertise}>
            {areaOfExpertise}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default AreasOfExpertise;
