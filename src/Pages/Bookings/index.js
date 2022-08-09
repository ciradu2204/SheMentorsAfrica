import { Box, Chip, Container, Tab, Tabs, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import useStyles from "./styles";
import { API } from "aws-amplify";
import moment from "moment-timezone"; 

const Bookings = ({ user }) => {
  //fetch all the bookings
  const [bookings, setBookings] = React.useState([]);
//   const [loading, setLoading] = React.useState(true);
  const [pastBookings, setPastBookings] = React.useState([])
  const [upcomingBookings, setUpcomingBookings] = React.useState([])
  const [pendingBookings, setPendingBookings] = React.useState([])
  const [value, setValue] = React.useState(0);
  const classes = useStyles();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  useEffect(() => {
    const fetchBookings = () => {
        const token = user.signInUserSession.idToken.jwtToken;
        const requestInfo = {
          headers: { Authorization: token },
        };
        API.get("profileApi", "/bookings", requestInfo)
          .then((result) => {
            setBookings(JSON.parse(result.body));
          })
          .catch((err) => {
            setBookings([]);
            console.log({ err });
          });
      };
    if(bookings.length <= 0){
        fetchBookings();
    }
  }, []);

 useEffect(() => {
  
    if(bookings.length > 0){
        const filter = () => {
            const past = bookings.filter((booking) => {
                return booking.booking.status === "past"
            })
            setPastBookings(past)
            const upcoming = bookings.filter((booking) => {
                return booking.booking.status === "upcoming"
            })
            setUpcomingBookings(upcoming)
            const pending = bookings.filter((booking) => {
                return booking.booking.status === "pending"
            })
            setPendingBookings(pending)
    
        }
        filter()
    }
    
  }, [bookings])
 
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
    <Container className={classes.container}>
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "background.paper",
          display: "flex",
          height: 224,
        }}
        className={classes.tabs}
      >
        <Tabs
          orientation="vertical"
          onChange={handleChange}
          value={value}
          aria-label="tabs"
          classes={{
            indicator: classes.indicator,
            root: classes.tabsRoot,
          }}
        >
          <Tab
            label="Upcoming"
            {...a11yProps(0)}
            classes={{
              root: classes.tabRoot,
            }}
          />
          <Tab
            label="Pending"
            {...a11yProps(1)}
            classes={{
              root: classes.tabRoot,
            }}
          />
          <Tab
            label="Past"
            
            {...a11yProps(2)}
            classes={{
              root: classes.tabRoot,
            }}
          />
        </Tabs>
      </Box>

      <Box className={classes.tabPanel}>
        <TabPanel value={value} index={0}>
          {upcomingBookings.length > 0 &&
            upcomingBookings.map((booking) => (
                <Box>
                   <Box className={classes.header}>
                      <Typography variant="h6" >${booking.booking.mentorName}, Mentor</Typography>
                      <Typography>${moment(booking.booking.bookedTime).format("MMMM Do YYYY, h:mm a")}</Typography>
                   </Box>
                   <Typography variant="body" className={classes.reason}>{booking.booking.reason}</Typography> 

                  <Box className={classes.skills}>
                    <Typography variant="h6" className={classes.title}>Skills: </Typography>
                    {booking.booking.areasOfExpertise.map((skills) => (
                      <chip
                        key={skills}
                        label={skills}
                        className={classes.chip}
                        variant="outlined"
                      />
                    ))}
                  </Box>
                  <Box className={classes.topics}>
                    <Typography  variant="h6" className={classes.title}>Mentorship Topics:  </Typography>
                    {booking.booking.mentorshipTopics.map((topic) => (
                      <Chip
                        key={topic}
                        label={topic}
                        className={classes.chip}
                        variant="outlined"
                      />
                    ))}
                  </Box>
                </Box>
            ))}
          {upcomingBookings.length <= 0 && (
               <Box className={classes.noBookings}>
              <Typography>No Upcoming bookings</Typography>
              </Box>
           )}
        </TabPanel>
        <TabPanel value={value} index={1}>
        {pendingBookings.length > 0 &&
            pendingBookings.map((booking) => (
                <Box>
                   <Box className={classes.header}>
                      <Typography variant="h5" >Mentor: {booking.booking.mentorName}</Typography>
                      <Typography> {moment(booking.booking.bookedTime).format("MMMM Do YYYY, h:mm a")}</Typography>
                   </Box>
                 
                 <Typography variant="body" className={classes.reason}>{booking.booking.reason}</Typography> 

                  <Box className={classes.skills}>
                    <Typography variant="h6" className={classes.title}>Skills: </Typography>
                    {booking.booking.areasOfExpertise.map((skills) => (
                      <Chip
                        key={skills}
                        label={skills}
                        className={classes.chip}
                        variant="outlined"
                      />
                    ))}
                  </Box>
                  <Box className={classes.topics}>
                    <Typography variant="h6" className={classes.title}>Mentorship Topics: </Typography>
                    {booking.booking.mentorshipTopics.map((topic) => (
                      <Chip
                        key={topic}
                        label={topic}
                        className={classes.chip}
                        variant="outlined"
                      />
                    ))}
                  </Box>
                </Box>
            ))}
          {pendingBookings.length <= 0 && (
              <Box className={classes.noBookings}>
                <Typography>No Pending bookings</Typography>
              </Box>
           )}
        </TabPanel>
        <TabPanel value={value} index={2}>
        {pastBookings.length > 0 &&
            pastBookings.map((booking) => (
                <Box>
                   <Box className={classes.header}>
                      <Typography variant="h5" >Mentor: ${booking.booking.mentorName}</Typography>
                      <Typography> ${moment(booking.booking.bookedTime).format("MMMM Do YYYY, h:mm a")}</Typography>
                   </Box>
                   <Typography variant="body" className={classes.reason}>{booking.booking.reason}</Typography> 

                  <Box className={classes.skills}>
                    <Typography variant="h6" className={classes.title}>Skills: </Typography>
                    {booking.booking.areasOfExpertise.map((skills) => (
                      <Chip
                        key={skills}
                        label={skills}
                        className={classes.chip}
                        variant="outlined"
                      />
                    ))}
                  </Box>
                  <Box className={classes.topics}>
                    <Typography variant="h6" className={classes.title}>Mentorship Topics: </Typography>
                    {booking.booking.mentorshipTopics.map((topic) => (
                      <Chip
                        key={topic}
                        label={topic}
                        className={classes.chip}
                        variant="outlined"
                      />
                    ))}
                  </Box>
                </Box>
            ))}
          {pastBookings.length <= 0 && (
            <Box className={classes.noBookings}>
              <Typography>No Past bookings</Typography>
            </Box>
           )}
        </TabPanel>
      </Box>
    </Container>
  );
};

export default Bookings;
