import {
  Box,
  Card,
  CardContent,
  Chip,
  Container,
  IconButton,
  Typography,
} from "@material-ui/core";
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import LaunchIcon from '@material-ui/icons/Launch'; 
import EmailIcon from '@material-ui/icons/Email';
import useStyles from "./styles";
import { Link } from "react-router-dom";

const AboutMe = ({profile}) => {
    console.log(profile)
  const classes = useStyles();
  return (
    <Container className={classes.aboutMe}>
      <Box className={classes.cardContainerLeft}>
        <Card className={classes.card}>
          <CardContent>
            <Typography  variant="h6" className={classes.aboutMeTitle}>Areas of Expertise</Typography>
            {profile.areasOfExpertise.map((areaOfExpertise) => (
              <Chip key={areaOfExpertise} label={areaOfExpertise} className={classes.chip} variant="outlined" />
            ))}
          </CardContent>
        </Card>

        <Card className={classes.card}>
          <CardContent>
          {profile.role === "Mentor" && (<Typography variant="h6" className={classes.aboutMeTitle}>Mentoring Topics</Typography>)}
           {profile.role === "Mentee" && (<Typography variant="h6" className={classes.aboutMeTitle}>I’d love some help with...</Typography>)}
              {profile.mentorshipTopics.map((mentoringTopic) =>(
                     <Chip key={mentoringTopic} className={classes.chip} variant="outlined" label={mentoringTopic} />
              ))}
          </CardContent>
        </Card>
        <Card className={classes.card}>
          <CardContent >
          <Typography  variant="h6" className={classes.aboutMeTitle}>Connect</Typography>
              {profile.connect.linkedIn && <IconButton component={Link} to={profile.connect.linkedIn} className={classes.connectIcon}><LinkedInIcon/></IconButton>}
              {profile.connect.twitter && <IconButton component={Link} to={profile.connect.twitter}  className={classes.connectIcon}><TwitterIcon/></IconButton>}
              {profile.connect.personalWebsite && <IconButton component={Link} to={profile.connect.personalWebsite}  className={classes.connectIcon}><LaunchIcon/></IconButton>}
              {profile?.email && <IconButton component={Link} to={profile.email}  className={classes.connectIcon}><EmailIcon/></IconButton>}
          </CardContent>
        </Card>
        
      </Box>
      <Box className={classes.cardContainerRight}>
      <Card className={classes.bio}>
          <CardContent>
          <Typography  variant="h6" className={classes.aboutMeTitle}>Bio</Typography>
              {profile.bio}
          </CardContent>
        </Card> 
      </Box>
    </Container>
  );
};

export default AboutMe;
