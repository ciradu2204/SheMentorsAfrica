import { Button, Container } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import SaveIcon from "@material-ui/icons/Save";
import LoadingButton from "@mui/lab/LoadingButton";
import useStyles from "./styles";


const ActionButtons = ({
  loading,
  ...props
}) => {
  const classes = useStyles();

  const handleBack = () => {
    props.previousStep();
  };

  const handleNext = () => {
    props.nextStep();
  };

  const handleFinish =  () => {
   props.lastStep()
  };

  return (
    <Container className={classes.actionButtons}>
      {props.currentStep > 1 && (
        <Button
          variant="contained"
          color="primary"
          disabled={loading? true: false}
          className={classes.prevActionButton}
          onClick={handleBack}
          startIcon={<ArrowBackIosIcon />}
        >
          Back
        </Button>
      )}
      {props.currentStep < props.totalSteps && (
        <Button
          variant="contained"
          color="primary"
          className={classes.nextActionButton}
          onClick={handleNext}
          endIcon={<ArrowForwardIosIcon />}
        >
          Next
        </Button>
      )}
      {props.currentStep === props.totalSteps && (
        <LoadingButton
          variant="contained"
          loading={loading}
          loadingPosition="start"
          color="primary"
          type="submit"
          className={classes.submitActionButton}
          onClick={handleFinish}
          startIcon={<SaveIcon />}
        >
          Save
        </LoadingButton>
      )}
    </Container>
  );
};

export default ActionButtons;
