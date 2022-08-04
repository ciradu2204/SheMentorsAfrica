import {
  Avatar,
  Box,
  Card,
  CircularProgress,
  Typography,
  Container,
  Button,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import Filters from "../../Components/Filters";
import BusinessIcon from "@material-ui/icons/Business";
import PlaceIcon from "@material-ui/icons/Place";
import useStyles from "./styles";
import { useNavigate } from "react-router-dom";

const Mentors = ({mentorsProfiles}) => {
  console.log(mentorsProfiles)
  const [loading, setLoading] = useState(false);
  const [filteredProfiles, setFilteredProfiles] = useState(mentorsProfiles);
  const classes = useStyles();
  let navigate = useNavigate(); 
  console.log(mentorsProfiles)

  const  arrayFilter = (source,target) => 
   {
    var result = target.filter(function(item){ return source.indexOf(item) > -1});   
    return result.length === target.length;  
   }    
  const filter =  (filterFields) => {
    console.log(filterFields);
    setLoading(true)
    console.log(filterFields)
    let filteredProfiles = mentorsProfiles.filter((profile) => {
    console.log(profile)
    return (
          (filterFields.mentorName === "" || profile.profile.fullName.toLowerCase().includes(filterFields.mentorName.toLowerCase())) &&
          (filterFields.country === "" || profile.profile.country === filterFields.country) && 
          (filterFields.areasOfExpertise.length === 0 || arrayFilter(profile.profile.areasOfExpertise, filterFields.areasOfExpertise)) &&
          (filterFields.mentorshipTopics.length === 0 || arrayFilter(profile.profile.mentorshipTopics, filterFields.mentorshipTopics)) &&
          (filterFields.level === "" || profile.profile.level === filterFields.level)
        );
      });
    setFilteredProfiles(filteredProfiles);
    setLoading(false)
  };

  const clear = () => {
    setFilteredProfiles(mentorsProfiles);
  }
 
 
 
  const handleViewProfile = (sub) => {
    navigate(`/profile/${sub}`)
  }

  return (
    <Container className={classes.container}>
      <Filters
        page="Mentors"
        filter={filter}
        clear = {clear}
        loading={loading}
        className={classes.filter}
      />
      {loading && 
        <Box className={classes.circularProgressBox}>
          {" "}
          <CircularProgress />{" "}
        </Box>}
        {!loading && filteredProfiles.length === 0  && 
       (
        <Box className={classes.mentorsNotFound}>
          <Typography variant="body1">No Mentors Found</Typography>
         </Box>
      )}
      {filteredProfiles.length > 0 && !loading  && 
        <Box className={classes.mentorsBox}>
          {filteredProfiles.map((profile) => (
            <Card key={profile.profile.userName} className={classes.mentorCard}>
              <Box className={classes.avatarBox}>
                <Avatar src={profile.profile.url} className={classes.avatar} />
              </Box>
              <Box className={classes.summary}>
                <Typography variant="h6" className={classes.mentorName}>
                  {profile.profile.fullName}
                </Typography>
                <Box className={classes.roleBox}>
                  <BusinessIcon />
                  <Typography
                    variant="subtitle1"
                    className={classes.mentorRole}
                  >
                    {profile.profile.experience.role},{" "}
                    {profile.profile.experience.company}
                  </Typography>
                </Box>
                <Box className={classes.locationBox}>
                  <PlaceIcon />
                  <Typography
                    variant="subtitle1"
                    className={classes.mentorLocation}
                  >
                    {profile.profile.country}
                  </Typography>
                </Box>
                <Button
                  disableElevation
                  disableRipple
                  variant="contained"
                  onClick={() => handleViewProfile(profile.profile.sub)}
                  className={classes.viewProfileButton}
                >
                  View Profile
                </Button>
              </Box>
            </Card>
          ))}
        </Box>
      }
    </Container>
  
  );
};

export default Mentors;
