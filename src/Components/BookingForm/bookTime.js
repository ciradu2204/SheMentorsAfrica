import { Container, Typography } from "@material-ui/core";
import { useCallback } from "react";
import { ScheduleMeeting } from 'react-schedule-meeting';
import ActionButtons from "../SetupFom/actionButtons";


const BookTime = ({availability, formik,  ...props})  => {
 
     const validate = () => {
        
     }

   //   const handleTimeSelect = useCallback((startTimeEventEmit) => {
   //      console.log(startTimeEventEmit)
   //   },[])

    
    return (
         <Container>
         <Typography variant="h6">Choose Slot</Typography>
         {/* <ScheduleMeeting
         borderRadius={10}
         primaryColor="#3f5b85"
         eventDurationInMinutes={30}
         availableTimeslots={availability}
         // onStartTimeSelect={handleTimeSelect}
         /> */}
          <ActionButtons {...props}/>
         </Container>
      )

}

export default BookTime; 