import { CardContent, Container } from "@material-ui/core";
import ActionButtons from "../Components/actionButtons";
import AreasOfExpertise from "../Components/areasOfExpertise";
import Connect from "../Components/connect";
import Education from "../Components/education";
import Level from "../Components/level";
import MentorshipTopics from "../Components/mentorshipTopics";
import useStyles from "../styles";

const Experience = ({ formik, ...props }) => {
  const classes = useStyles();

  const validate = async() => {
       await props.nextStep()
  }

  return (
    <Container disableGutters className={classes.container}>
      <CardContent className={classes.cardContent}>
        <Level formik={formik} />
        <AreasOfExpertise formik={formik} />
        <MentorshipTopics formik={formik} />
        <Education formik={formik} />
        <Experience formik={formik} />
        <Connect formik={formik} />
      </CardContent>
      <ActionButtons {...props} nextStep={validate} />
    </Container>
  );
};
export default Experience;
