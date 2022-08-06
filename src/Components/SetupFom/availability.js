import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import useStyles from "./styles";
import { StyleWrapper } from "./styleWrapper";
import { CardContent, Container } from "@material-ui/core";
import { Alert } from "@mui/material";
import { useState } from "react";
import ActionButtons from "./actionButtons";

const Availability = ({formik, loading, onComplete, ...props}) => {
  const classes = useStyles()
   const [error, setError] = useState("");


  const handleDateSelect = (selectInfo) => {
    let calendarApi = selectInfo.view.calendar;
    let title = ""
    calendarApi.unselect(); // clear date selection

      calendarApi.addEvent({
        id: formik.values.availability.length,
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      });
    
  };

  const validate = () => {
     if(formik.values.availability.length != null){
      setError("")
      props.lastStep()
      onComplete()
    }else{
      setError("One slot range needs to be selected");
    }
  };
 

  const handleEventClick = (clickInfo) => {
    
      clickInfo.event.remove();
    
  };

  const handleEvents = (events) => {
    console.log("called")
    const eventsArray = [];
    events.forEach((event) => {
      eventsArray.push({
        id: event.id,
        start: event.start,
        end: event.end,
        title: event.title,
        allDay: event.allDay,
      });
    });
    formik.setFieldValue('availability', eventsArray)
    console.log(formik.values.availability)
  };


   
  

  return (
    <Container disableGutters className={classes.container}>
    {error.length > 0 && (
      <Alert severity="error" className={classes.error}>
        {error}
      </Alert>
    )}
     {error.length <= 0 && (
      <Alert severity="info" className={classes.info}>
         Please select a time range when you are available to mentor!
      </Alert>
    )}
      <CardContent className={classes.calendar}>
         <StyleWrapper>
          <FullCalendar
            headerToolbar={{
              left: "prev,next",
              center: "title",
              right: "timeGridWeek",
            }}
            validRange={{
              start: Date.now(),
            }}
            allDaySlot={false}
            initialEvents={formik.values.availability}
            nowIndicator
            editable={true}
            selectable={true}
            slotMinTime="09:00:00"
            slotMaxTime="22:00:00"
            eventColor="#408FAA"
            timeZone="local"
            select={handleDateSelect}
            eventClick={handleEventClick}
            eventsSet={handleEvents}
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
            ]}
            initialView="timeGridWeek"
          />
          </StyleWrapper>
        </CardContent>
        <ActionButtons {...props} lastStep={validate} loading={loading}/>

    </Container>
  );
};
export default Availability;
