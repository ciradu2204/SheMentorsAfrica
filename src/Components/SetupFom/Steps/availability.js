import { useEffect, useState, useCallback } from 'react';
import { CardContent, Container } from '@material-ui/core';
import ActionButtons from '../Components/actionButtons';
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css'


import { Calendar, momentLocalizer } from 'react-big-calendar'
import useStyles from '../styles';

const Availability = ({formik, ...props}) =>{
    const initial  = formik.values.availability.length === 0? [] : formik.values.availability
    const [availability, setAvailability] = useState(initial); 
    const localizer = momentLocalizer(moment) // or globalizeLocalizer
    const classes = useStyles(); 
    const DnDCalendar = withDragAndDrop(Calendar)

   const slotPropGetter = useCallback((event, start, end, isSelected) => ({
     className: 'slotDefault',
     ...(moment(start).hour() < 8 && {
      style: {
        backgroundColor: 'green !important',
        color: 'white',
      },
     }),
      ...(event.allDay === false && {
        style: {
          backgroundColor: '#E49433 !important',
          color: 'white',
        },
      }),
      ...(isSelected && {
         style: {
          backgroundColor: '#E49433 !important',
          color: 'white',
        },
      }),
    })
       ,[])

    useEffect(() => {
      formik.setFieldValue('availability', availability)
      // eslint-disable-next-line
    }, [availability])
    const today = new Date();
    const moveEvent = useCallback(  ({ event, start, end, isAllDay: droppedOnAllDaySlot = false }) =>{
      
      setAvailability((prev) => {
        let id = prev.indexOf(event)
        const slot = {title: "", start, end, allDay: false}
        let newEvents = [...prev]; 
        newEvents[id] = slot; 
        return [...newEvents]
      })
    },[setAvailability])

    const resizeEvent = useCallback(
    
      ({ event, start, end }) => {
        console.log("called resize event")
        setAvailability((prev) => {
          let id = prev.indexOf(event)
          const slot = {title: "", start, end, allDay: false}
          let newEvents = [...prev]; 
          newEvents[id] = slot; 
          return [...newEvents]
        })
      },
      [setAvailability]
    )

    const onSelectSlot = useCallback((slotInfo) => {
      const slot = {title: "", ...slotInfo, allDay: false}
      setAvailability((prevState) =>[...prevState, slot])
    }, [])

    const handleOnSelect = (e) =>{

    }
    useEffect(() =>{
        formik.setFieldValue("availability", availability); 
      // eslint-disable-next-line
    }, [availability])

return (
<Container disableGutters className={classes.container} >
  
<CardContent className={classes.calendar}>
<DnDCalendar
      localizer={localizer}
      events={availability}
      defaultView='week'
      selectable
      min={
        new Date(
          today.getFullYear(), 
          today.getMonth(), 
          today.getDate(), 
          9
        )
      }
      max={
        new Date(
          today.getFullYear(), 
          today.getMonth(), 
          today.getDate(), 
          22
        )
      }
      onSelectSlot={onSelectSlot}
      slotPropGetter={slotPropGetter}
      defaultDate={new Date(Date.now())}
      onSelectEvent={handleOnSelect}
      step={30}
      views={['week']}
      start={new Date()}
      onEventDrop={moveEvent}
      onEventResize={resizeEvent}
      startAccessor="start"
      endAccessor="end"
    />
</CardContent>
<ActionButtons {...props}   />
</Container>
)



}

export default Availability; 