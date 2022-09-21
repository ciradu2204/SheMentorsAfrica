import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Container,
  IconButton,
  Typography,
} from "@material-ui/core";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import useStyles from "./styles";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import EditIcon from "@material-ui/icons/Edit";
import EmojiEventsIcon from "@material-ui/icons/EmojiEvents";
import SchoolIcon from "@material-ui/icons/School";
import PlaceIcon from "@material-ui/icons/Place";
import Tab from "@mui/material/Tab";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import React, { useState } from "react";
import BusinessIcon from "@material-ui/icons/Business";
import Label from "@material-ui/icons/LabelImportant";
import AboutMe from "./aboutMe";


const Profile = () => {
  const [profile,  user, setFormOpen, mentorsProfiles, setMentorProfile, setBookingFormOpen] = useOutletContext();
  const {id} = useParams()
  const findCurrentProfile = () => {
   return mentorsProfiles.find(mentorProfile => mentorProfile.profile.sub === id)
  }
  const [currentProfile, setCurrentProfile] = useState(id === "me"? profile: findCurrentProfile());
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate()
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleEdit = () => {
    setFormOpen(true);
  };

  const handleBack = () => {
    navigate(-1);
  }

  const handleBooking = () =>{
    setMentorProfile(currentProfile); 
    setBookingFormOpen(true)
  }


  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <Box
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
        classes={{ root: classes.pannelRoot }}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </Box>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`,
    };
  }

  return (
    <>
    {currentProfile === null? (  <Box>
      <CircularProgress/> </Box>) : (
      <Container className={classes.container} disableGutters>
      <Box className={classes.header}>
        <Box className={classes.icons}>
          <IconButton aria-label="back" className={classes.back} onClick={handleBack}>
            <ArrowBackIosIcon />
          </IconButton>
          {user.attributes.sub === currentProfile.profile.sub && (
            <Button
              endIcon={<EditIcon />}
              className={classes.edit}
              disableRipple
              onClick={handleEdit}
            >
              Edit Profile
            </Button>
          )}
        </Box>
        <Box className={classes.contentParent}>
          <Box className={classes.avatarBox}>
            <Avatar className={classes.avatar} src={currentProfile.profile.url} />
          </Box>
          <Box className={classes.content}>
            <Typography variant="h4" className={classes.name}>
              {currentProfile.profile.fullName}
            </Typography>
            {currentProfile.profile.role === "Mentor" && (
              <>
                <Typography variant="h6" className={classes.title}>
                  {currentProfile.profile.experience.role}{" "}
                </Typography>
                <Box className={classes.experience}>
                  <Box className={classes.experienceBox}>
                    <Label />
                    <Typography variant="subtitle1">
                      {" "}
                      {currentProfile.profile.role}
                    </Typography>
                  </Box>
                  <Box className={classes.experienceBox}>
                    <EmojiEventsIcon />
                    <Typography variant="subtitle1">
                      {" "}
                      {currentProfile.profile.level}
                    </Typography>
                  </Box>
                  <Box className={classes.experienceBox}>
                    <BusinessIcon />
                    <Typography variant="subtitle1">
                      {" "}
                      {currentProfile.profile.experience.company}
                    </Typography>
                  </Box>
                  <Box className={classes.experienceBox}>
                    <PlaceIcon />
                    <Typography variant="subtitle1">
                      {" "}
                      {currentProfile.profile.country}
                    </Typography>
                  </Box>
                </Box>
                {currentProfile.profile.sub !== profile.profile.sub?(<Box className={classes.bookButtonBox}>
                  <Button className={classes.bookButton} onClick={handleBooking}>Book Session</Button>
                </Box>): (<Box className={classes.bookButtonBox}>
                  <Button className={classes.bookButton} onClick={handleEdit}>Edit Availability</Button>
                </Box>)}
              </>
            )}
            {currentProfile.profile.role === "Mentee" && (
              <>
                <Typography variant="h6" className={classes.title}>
                  {currentProfile.profile.education.degree} Student
                </Typography>
                <Box className={classes.experience}>
                  <Box className={classes.experienceBox}>
                    <Label />
                    <Typography variant="subtitle1">
                      {" "}
                      {currentProfile.profile.role}
                    </Typography>
                  </Box>
                  <Box className={classes.experienceBox}>
                    <SchoolIcon />
                    <Typography variant="subtitle1">
                      {" "}
                      {currentProfile.profile.education.school}
                    </Typography>
                  </Box>
                  <Box className={classes.experienceBox}>
                    <PlaceIcon />
                    <Typography variant="subtitle1">
                      {" "}
                      {currentProfile.profile.country}
                    </Typography>
                  </Box>
                </Box>
              </>
            )}
          </Box>
        </Box>
      </Box>

      <Box className={classes.body}>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              onChange={handleChange}
              value={value}
              aria-label="tabs"
              classes={{
                indicator: classes.indicator,
                root: classes.tabsRoot,
              }}
            >
              <Tab
                label="About Me"
                {...a11yProps(0)}
                classes={{
                  root: classes.tabRoot,
                }}
              />
              <Tab
                label={
                  currentProfile.profile.role === "Mentor"
                    ? "Answered Q&N"
                    : "Asked Q&N"
                }
                {...a11yProps(1)}
                classes={{
                  root: classes.tabRoot,
                }}
              />
              <Tab
                label={
                  currentProfile.profile.role === "Mentor"
                    ? "Reviews"
                    : "Reviews Given"
                }
                {...a11yProps(2)}
                classes={{
                  root: classes.tabRoot,
                }}
              />
            </Tabs>
          </Box>

          <TabPanel value={value} index={0}>
            <AboutMe profile={currentProfile.profile} />
          </TabPanel>
          <TabPanel value={value} index={1}>
           </TabPanel>
          <TabPanel value={value} index={2}>
           </TabPanel>
        </Box>
      </Box>
   
   </Container>

    )}
    
    </>
  );
};

export default Profile;
