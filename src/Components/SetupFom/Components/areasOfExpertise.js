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
const AreasOfExpertise = ({ formik }) => {
  const classes = useStyles();

  const AreasOfExpertise = [
    "Frontend Development",
    "Backend development",
    "Cloud Computing",
    "DevOps",
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
    <FormControl variant="outlined" fullWidth className={classes.item}>
      <InputLabel id="areaOfExpertise-label">Areas of Expertise</InputLabel>
      <Select
        labelId="areaOfExpertise-label"
        id="select-areaOfExpertise"
        name="areaOfExpertise"
        multiple
        value={formik.values.areasOfExpertise}
        label="areaOfExpertise"
        onChange={formik.handleChange}
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
