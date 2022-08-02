import {
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Typography,
} from "@material-ui/core";
import { useOutletContext } from "react-router-dom";
import useStyles from "./styles";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import EditIcon from "@material-ui/icons/Edit";
import EmojiEventsIcon from "@material-ui/icons/EmojiEvents";
import SchoolIcon from "@material-ui/icons/School";
import PlaceIcon from "@material-ui/icons/Place";
import Tab from "@mui/material/Tab";
import PropTypes from 'prop-types';
import Tabs from "@mui/material/Tabs"
import React from "react";
import BusinessIcon from '@material-ui/icons/Business';
import Label from '@material-ui/icons/LabelImportant';
import AboutMe from './aboutMe'

const Profile = () => {
  const [profile, url, user, setFormOpen] = useOutletContext();
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
 

  const handleEdit = () => {
    setFormOpen(true)
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
        classes={{root: classes.pannelRoot}}
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
      'aria-controls': `full-width-tabpanel-${index}`
     };
  }

  return (
    <Container  className={classes.container} disableGutters>
      <Box className={classes.header}>
        <Box className={classes.icons}>
          <IconButton aria-label="back" className={classes.back}>
            <ArrowBackIosIcon />
          </IconButton>
          <Button endIcon={<EditIcon />} className={classes.edit} disableRipple onClick={handleEdit}>
            Edit Profile
          </Button>
        </Box>
        <Box className={classes.contentParent}>
          <Box className={classes.avatarBox}>
            <Avatar className={classes.avatar} src={url} />
          </Box>
          <Box className={classes.content}>
            <Typography variant="h4" className={classes.name}>
              {profile.profile.userName}
            </Typography>
            {profile.profile.role === "Mentor" && (
              <>
                <Typography variant="h6" className={classes.title}>
                  {profile.profile.experience.role}{" "}
                </Typography>
                <Box className={classes.experience}>
                <Box className={classes.experienceBox}>
                    <Label />
                    <Typography variant="subtitle1">
                      {" "}
                      {profile.profile.role}
                    </Typography>
                  </Box>
                  <Box className={classes.experienceBox}>
                    <EmojiEventsIcon />
                    <Typography variant="subtitle1">
                      {" "}
                      {profile.profile.level}
                    </Typography>
                  </Box>
                  <Box className={classes.experienceBox}>
                    <BusinessIcon />
                    <Typography variant="subtitle1">
                      {" "}
                      {profile.profile.experience.company}
                    </Typography>
                  </Box>
                  <Box className={classes.experienceBox}>
                    <PlaceIcon />
                    <Typography variant="subtitle1">
                      {" "}
                      {profile.profile.country}
                    </Typography>
                  </Box>
                </Box>
                <Box className={classes.bookButtonBox} >
                <Button className={classes.bookButton} >Book Session</Button>
                </Box>
              </>
            )}
            {profile.profile.role === "Mentee" && (
              <>
                <Typography variant="h6" className={classes.title}>
                  {profile.profile.education.degree}{" "} Student
                </Typography>
                <Box className={classes.experience}>
                  <Box className={classes.experienceBox}>
                    <Label />
                    <Typography variant="subtitle1">
                      {" "}
                      {profile.profile.role}
                    </Typography>
                  </Box>
                  <Box className={classes.experienceBox}>
                    <SchoolIcon />
                    <Typography variant="subtitle1">
                      {" "}
                      {profile.profile.education.school}
                    </Typography>
                  </Box>
                  <Box className={classes.experienceBox}>
                    <PlaceIcon />
                    <Typography variant="subtitle1">
                      {" "}
                      {profile.profile.country}
                    </Typography>
                  </Box>
                </Box>
              </>
            )}
          </Box>
        </Box>
      </Box>

      <Box className={classes.body}>
       
          <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                onChange={handleChange}
                value={value}
                aria-label="tabs"
                classes={{
                  indicator: classes.indicator,
                  root: classes.tabsRoot
                }}
                
              >
                <Tab label="About Me"    {...a11yProps(0)} classes={{
                  root: classes.tabRoot,
                }}/>
                <Tab label={profile.profile.role === "Mentor"? "Answered Q&N": "Asked Q&N"}  {...a11yProps(1)} classes={{
                  root: classes.tabRoot,}} />
                <Tab label={profile.profile.role === "Mentor"? "Reviews": "Reviews Given"}   {...a11yProps(2)} classes={{
                  root: classes.tabRoot,}}/>
              </Tabs>
              </Box>

              <TabPanel value={value} index={0} >
                 <AboutMe profile={profile.profile}/>
              </TabPanel>
              <TabPanel value={value} index={1} >Item Two</TabPanel>
              <TabPanel value={value} index={2} >Item Three</TabPanel>
            </Box>
      
      </Box>
    </Container>
  );
};

export default Profile;
