import {
  Box,
  Card,
  CardContent,
  Chip,
  Container,
  IconButton,
  Typography,
} from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import LaunchIcon from "@material-ui/icons/Launch";
import EmailIcon from "@material-ui/icons/Email";
import useStyles from "./styles";
import { Link } from "react-router-dom";

const AboutMe = ({ profile }) => {
  const classes = useStyles();

  const ButtonMailto = ({ mailto, ...props }) => {
    return (
      <IconButton
      to="#"
      component={Link}
      onClick={(e) => {
        window.location.href = mailto;
        e.preventDefault();
      }}
      className={classes.connectIcon}
    >
      {props.children}
    </IconButton>
    );
  };
  return (
    <Container className={classes.aboutMe}>
      <Box className={classes.cardContainerLeft}>
        <Card className={classes.card}>
          <Typography variant="h6" className={classes.aboutMeTitle}>
            Skills & Interest
          </Typography>
          <CardContent className={classes.cardContent}>
            {profile.areasOfExpertise.map((areaOfExpertise) => (
              <Chip
                key={areaOfExpertise}
                label={areaOfExpertise}
                className={classes.chip}
                variant="outlined"
              />
            ))}
          </CardContent>
        </Card>

        <Card className={classes.card}>
          {profile.role === "Mentor" && (
            <Typography variant="h6" className={classes.aboutMeTitle}>
              Mentoring Topics
            </Typography>
          )}
          {profile.role === "Mentee" && (
            <Typography variant="h6" className={classes.aboutMeTitle}>
              I’d love some help with...
            </Typography>
          )}
          <CardContent className={classes.cardContent}>
            {profile.mentorshipTopics.map((mentoringTopic) => (
              <Chip
                key={mentoringTopic}
                className={classes.chip}
                variant="outlined"
                label={mentoringTopic}
              />
            ))}
          </CardContent>
        </Card>
        
      </Box>
      <Box className={classes.cardContainerRight}>
        <Card className={classes.bio}>
          <Typography variant="h6" className={classes.aboutMeTitle}>
            Bio
          </Typography>
          <CardContent>{profile.bio}</CardContent>
        </Card>
        <Box className={classes.flex}> 
        <Card className={classes.card}>
          <Typography variant="h6" className={classes.aboutMeTitle}>
            Connect
          </Typography>
          <CardContent className={classes.cardContent}>
            {profile.connect.linkedIn && (
              <IconButton
                component={Link}
                to={profile.connect.linkedIn}
                className={classes.connectIcon}
              >
                <LinkedInIcon />
              </IconButton>
            )}
            {profile.connect.twitter && (
              <IconButton
                component={Link}
                to={profile.connect.twitter}
                className={classes.connectIcon}
              >
                <TwitterIcon />
              </IconButton>
            )}
            {profile.connect.personalWebsite && (
              <IconButton
                component={Link}
                to={profile.connect.personalWebsite}
                className={classes.connectIcon}
              >
                <LaunchIcon />
              </IconButton>
            )}
            {profile?.email && (
              <ButtonMailto
              mailto={`mailto:${profile.email}`}
              >
                <EmailIcon />
              </ButtonMailto>
            )}
          </CardContent>
        </Card> 
        <Card className={classes.card}>
          <Typography variant="h6" className={classes.aboutMeTitle}>
            Languages
          </Typography>
          <CardContent className={classes.cardContent}>
            {profile.languages.map((language) => (
              <Chip
                key={language}
                label={language}
                className={classes.chip}
                variant="outlined"
              />
            ))}
          </CardContent>
        </Card>
        </Box>
      </Box>
    </Container>
  );
};

export default AboutMe;
