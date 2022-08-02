import { Button, Container } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import SaveIcon from "@material-ui/icons/Save";
import LoadingButton from "@mui/lab/LoadingButton";
import { API } from "aws-amplify";
import useStyles from "../styles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ActionButtons = ({
  user,
  profile,
  formik,
  setError,
  setProfile,
  updateForm,
  ...props
}) => {
  const [loading, setLoading] = useState(false);
  const classes = useStyles();
  const navigate = useNavigate();

  const createProfile = async () => {
    const token = user.signInUserSession.idToken.jwtToken;
    let profile = {
      ...formik.values,
      userId: user.attributes.sub,
      email: user.attributes.email,
    };
    const requestInfo = {
      headers: { Authorization: token },
      body: { profile: profile },
    };
    try {
      await API.post("profileApi", "/profiles", requestInfo);
      setProfile(requestInfo.body);
    } catch (error) {
      setError(error.message);
      setLoading(false);
      return "";
    }
  };
  const updateProfile = async () => {
    const token = user.signInUserSession.idToken.jwtToken;
    let profile = { ...formik.values };
    const requestInfo = {
      headers: { Authorization: token },
      body: { profile: profile },
    };

    try {
      await API.put("profileApi", "/profiles", requestInfo);
      setProfile(requestInfo.body);
    } catch (error) {
      setError(error.message);
      setLoading(false);
      return "";
    }
  };

  const handleBack = () => {
    props.previousStep();
  };

  const handleNext = () => {
    props.nextStep();
  };

  const handleFinish = async () => {
    setLoading(true);

    if (profile == null) {
      await createProfile();
    } else {
      await updateProfile();
    }

    setLoading(false);
    updateForm(false);
    navigate("/dashboard");
  };

  return (
    <Container className={classes.actionButtons}>
      {props.currentStep > 1 && (
        <Button
          variant="contained"
          color="primary"
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
