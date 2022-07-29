import AvailableTimes from 'react-available-times';
import { useEffect, useState } from 'react';
import { CardContent, Container } from '@material-ui/core';
import ActionButtons from '../Components/actionButtons';
import useStyles from '../styles';

const Availability = ({formik, props}) =>{
    const [availability, setAvailability] = useState([]); 
    const classes = useStyles(); 
    useEffect(() =>{
        formik.setFieldValue("availability", availability); 
      // eslint-disable-next-line
    }, [availability])

return (
<Container disableGutters className={classes.container} >
  
<CardContent className={classes.cardContent}>
<AvailableTimes
  weekStartsOn="monday"
  onChange={(selections) => {
    selections.forEach(({ start, end }) => {
     setAvailability([...availability, {start, end}]);
    })
  }}
  initialSelections={[
    formik.values.availability
  ]}
  height={500}
  recurring={false}
  availableDays={['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']}
/>
</CardContent>
<ActionButtons {...props} />
</Container>
)



}

export default Availability; 