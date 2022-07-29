import { Button, Container } from "@material-ui/core";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Send } from "@material-ui/icons";
import useStyles from "../styles";



const ActionButtons = (props) => {
    const classes = useStyles();
    const handleBack = () => {
      props.previousStep()
    }

    const handleNext = () => {
        props.nextStep();
    };

    const handleFinish = () => {
        props.lastStep();
    };

    return (

        <Container className={classes.actionButtons}>
           {props.currentStep > 1  && (
               <Button variant="contained" color="primary" className={classes.prevActionButton}  onClick={handleBack} endIcon={<ArrowBackIosIcon />}>Back</Button>
           )}
           {props.currentStep <  props.totalSteps && (
               <Button variant="contained" color="primary"  className={classes.nextActionButton} onClick={handleNext} endIcon={<ArrowForwardIosIcon />}>Next</Button>

           )}
           {props.currentStep ===  props.totalSteps && (
               <Button variant="contained" color="primary" className={classes.submitActionButton} onClick={handleFinish} endIcon={<Send />}>Save</Button>

           )}
        </Container>

    )


}

export default ActionButtons; 