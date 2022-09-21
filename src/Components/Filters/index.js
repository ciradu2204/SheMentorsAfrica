import useStyles from "./styles";
import { useFormik } from "formik";
import { Box, Button, InputAdornment, TextField } from "@material-ui/core";
import Country from "../Inputs/countries";
import AreasOfExpertise from "../Inputs/areasOfExpertise";
import MentorshipTopics from "../Inputs/mentorshipTopics";
import Level from "../Inputs/level";
import SortBy from "../Inputs/sortBy";
import SearchIcon from '@material-ui/icons/Search';
import { useTheme } from '@material-ui/core/styles';
import {useMediaQuery} from '@material-ui/core';
import { useState } from "react";

const Filters = ({ page, loading, filter, clear, user }) => {
  const [showFilters, setShowFilters]  = useState(false);
  const theme = useTheme(); 
  const authenticated = user !== null;
  const props = {
    page : authenticated
  }
  const classes = useStyles(props);
  const isSmallOrLess = useMediaQuery(theme.breakpoints.down('sm'));
  const initialValues = {
    country: "",
    mentorshipTopics: [],
    level: "",
    areasOfExpertise: [],
    mentorName: "",
    opportunityType: "",
    sortBy: "",
  }
  const hasError = {
    country: false,
    mentorshipTopics: false,
    level: false,
    areasOfExpertise: false,
    mentorName: false,
    opportunityType: false,
    sortBy: false,
  };
 
  const formik = useFormik({
    initialValues: initialValues,
  
  });
  const handleSubmit = () => {
     filter(formik.values)
  }
  const handleClear = () => {
    formik.resetForm()
    clear()
  }
  return (
    <>
     {isSmallOrLess && <Button variant="contained" className={classes.filterButton} onClick={() => setShowFilters((prev) => !prev)}>Show Filters</Button>}
     {(showFilters || !isSmallOrLess) && <form className={classes.form} >
      {page === "Mentors" && (
        <TextField
          fullWidth
          focused={true} 
          name="mentorName"
          multiline={true}
          minRows={2}
          label="Enter mentors name"
          margin="dense"
          type="string"
          value={formik.values.mentorName}
          className={classes.item}
          onChange={formik.handleChange}
          InputLabelProps={{
            classes: {
                outlined: classes.label,
            },
          }}
          InputProps={{
            startAdornment:<InputAdornment position="end"> <SearchIcon/>  </InputAdornment>, 
            classes:{
                adornedEnd: classes.icon,
              }
            
          }}
          
          id="mentor-name"
          size="medium"
          variant="outlined"
        />
      )}
      {page === "Disccussion" && <SortBy formik={formik} hasError={hasError} required={false} focused={true} />}
      {page === "Opportunity" && (
        <opportunityType formik={formik} hasError={hasError} required={false} focused={true}  />
      )}
      {(page === "Mentors" || page === "Opportunities") && (
        <Country formik={formik} hasError={hasError} required={false} label="labelDashboard" focused={true} />
      )}
      {(page === "Mentors" || page === "Opportunities") && (
        <AreasOfExpertise formik={formik} hasError={hasError} required={false} label="labelDashboard" focused={true} user={user} />
      )}
      <MentorshipTopics formik={formik} hasError={hasError} required={false} label="labelDashboard" focused={true} />
      {page === "Mentor" && <Level formik={formik} hasError={hasError} required={false} label="labelDashboard" focused={true} />}
        
       <Box className={classes.actionButtons}>
           <Button disabled={loading} className={classes.submit} onClick={handleSubmit} variant="contained" disableElevation disableRipple >Submit</Button>
           <Button  disabled={loading}  className={classes.clear} onClick={handleClear} variant="contained"  disableElevation disableRipple>Clear</Button>
       </Box>
    </form>}
    </>
  );
};

export default Filters;
