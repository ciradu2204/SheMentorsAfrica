import React, { useEffect, useState, useCallback } from "react";
import { CardContent, Container } from "@material-ui/core";
import ActionButtons from "../Components/actionButtons";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import momentTimezonePlugin from "@fullcalendar/moment-timezone";
import styled from "@emotion/styled";
import useStyles from "../styles";
import { Alert } from "@mui/material";

const Availability = ({ formik, onComplete, ...props }) => {
  const initial =formik.values.availability.length === 0 ? [] : formik.values.availability;
  const [availability] = useState(initial);
  const [error, setError] = useState("");
  let calendarRef = React.useRef();
  const classes = useStyles();
  const handleDateSelect = (selectInfo) => {
    let title = "";
    let calendarApi = selectInfo.view.calendar;
    calendarApi.unselect();

    calendarApi.addEvent({
      id: calendarRef.current.length,
      title,
      start: selectInfo.startStr,
      end: selectInfo.endStr,
      allDay: selectInfo.allDay,
    });
  };

  const StyleWrapper = styled.div`
    .fc-button.fc-prev-button,
    .fc-button.fc-next-button,
    .fc-button.fc-button-primary {
      background: rgb(224, 224, 224);
      border-color: rgb(224, 224, 224);
      font-weight: 600;
    }
    ,
    .fc-timegrid-slots {
      cursor: pointer;
    }
    ,
    .fc-button.fc-button-primary:hover {
      background: #e49433 !important;
      border-color: #e49433;
    }
    .fc-button.fc-next-button {
      background: #e49433 !important;
    }
    ,
    .fc-prev-button.fc-button.fc-button-primary.fc-button-active {
      background: #f5f5f5 !important;
    }
    ,
    .fc-timeGridWeek-button.fc-button.fc-button-primary.fc-button-active {
      background: #e49433 !important;
      border-color: #e49433;
    }
    ,
    .fc .fc-toolbar-title {
      font-size: 1em !important;
    }
    .fc-view-harness.fc-view-harness-active {
      height: 350px !important;
    }
  `;
  const validate = () => {
    if(calendarRef.current.length > 0){
      formik.setFieldValue("availability", calendarRef.current);
      setError("")
      onComplete()
    }else{
      setError("One slot range needs to be selected");
    }
  };
  const validatePrev = () =>{
      formik.setFieldValue("availability", calendarRef.current);
      props.previousStep()
   
  }
  const handleEvents = useCallback((events) => {
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
    calendarRef.current = eventsArray;
  }, []);

  const handleEventClick = (clickInfo) => {
    clickInfo.event.remove();
  };

  useEffect(() => {
    formik.setFieldValue("availability", availability);
    // eslint-disable-next-line
  }, [availability]);

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
            ref={calendarRef}
            allDaySlot={false}
            events={availability}
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
              momentTimezonePlugin,
            ]}
            initialView="timeGridWeek"
          />
        </StyleWrapper>
      </CardContent>
      <ActionButtons {...props} previousStep={validatePrev}  lastStep={validate} />
    </Container>
  );
};

export default Availability;
