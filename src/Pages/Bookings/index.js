import { Box, Container, Tab, Tabs, Typography } from "@material-ui/core";
import React from "react";
import PropTypes from "prop-types";
import useStyles from "./styles";


const Bookings = ()  => {

   //fetch all the bookings
   const [bookings, setBookings] = React.useState([]); 
   const [loading, setLoading] = React.useState(true);
   const [value, setValue] = React.useState(0);
   const classes = useStyles()
   const handleChange = (event, newValue) => {
    setValue(newValue);
  };
   const fetchAllBookings = () => {

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
    
      <Container className={classes.container}> 
 
          <Box  sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
 className={classes.tabs}>
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
            Hello, world
          </TabPanel>
          <TabPanel value={value} index={1}>
          </TabPanel>
          <TabPanel value={value} index={2}>
          </TabPanel>
          </Box>
      </Container>


   )


}

export default Bookings; 