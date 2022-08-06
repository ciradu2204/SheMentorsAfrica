import {  Container, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { ScheduleMeeting } from "react-schedule-meeting";
import ActionButtons from "../SetupFom/actionButtons";
import useStyles from "./style";
import moment from "moment-timezone"; 
import { Alert } from "@mui/material";

const BookTime = ({formik, mentorProfile, onComplete, loading,  ...props}) => {
  const classes = useStyles()
  const [selectedSlot, setSelectedSlot] = useState("")
  const timeZone = moment.tz.guess();
  const [error, setError] = useState("")
 const availableTimeslots2 = mentorProfile === null? [] :  mentorProfile?.profile?.availability.map((slot) => {
   return {
     id: slot.id, 
     startTime: slot.start, 
     endTime: slot.end, 
   }
 })

  const style = {
    "box-shadow": "none !important",
    "-webkit-box-shadow":"none",
   "-moz-box-shadow": "none",
   "& button":{
     "background-color": "red",
   }
    
  }

  const handleTimeslotClicked = (startTimeEventEmit) => {
    console.log(startTimeEventEmit)
     setSelectedSlot(moment(startTimeEventEmit.startTime).tz(timeZone).format("LT z"))
     formik.setFieldValue('bookedTime', startTimeEventEmit)

  };

  const validate = () => {
    if(selectedSlot === ""){
     setError("A slot needs to be selected")
    }else{
     setError("");
     props.lastStep();
     onComplete()

    }
  }



 
  return (
    <Container className={classes.container}
    >
       {selectedSlot === "" && <Typography variant="h5" className={classes.title}>Select a slot</Typography>}
       {selectedSlot !== "" && <Typography variant="h5" className={classes.title}>Selected slot: {selectedSlot} </Typography>}
       {error.length > 0 && selectedSlot === "" && (
      <Alert severity="error" className={classes.error}>
        {error}
      </Alert>
    )}
      <ScheduleMeeting
        borderRadius={10}
        scheduleMeetingStyles={style}
        primaryColor="#E49433"
        eventDurationInMinutes={30}
        availableTimeslots={availableTimeslots2}
        onStartTimeSelect={handleTimeslotClicked}
      />

      <ActionButtons {...props} label="Book" lastStep={validate} loading={loading} />
    </Container>
  );
};

export default BookTime;
