import {
  Avatar,
  Box,
  Button,
  Card,
  CircularProgress,
  Typography,
} from "@material-ui/core";
import useStyles from "./styles";
import BusinessIcon from "@material-ui/icons/Business";
import PlaceIcon from "@material-ui/icons/Place";
const Profiles = ({profiles, loading, handleViewProfile }) => {
  const classes = useStyles();
  return (
    <>
      {loading && (
        <Box className={classes.circularProgressBox}>
          <CircularProgress />
        </Box>
      )}
      {!loading && profiles.length === 0 && (
        <Box className={classes.mentorsNotFound}>
          <Typography variant="body1">No Mentors Found</Typography>
        </Box>
      )}
      {profiles.length > 0 && !loading && (
        <Box className={classes.mentorsBox}>
          {profiles.map((profile) => (
            <Card key={profile.profile.userName} className={classes.mentorCard}>
              <Box className={classes.avatarBox}>
                <Avatar src={profile.profile.url} className={classes.avatar} />
              </Box>
              <Box className={classes.info}>
                <Box className={classes.summary}>
                  <Typography
                    noWrap
                    variant="h6"
                    className={classes.mentorName}
                  >
                    {profile.profile.fullName}
                  </Typography>
                  <Box className={classes.roleBox}>
                    <BusinessIcon />
                    <Typography
                      noWrap
                      variant="subtitle1"
                      className={classes.mentorRole}
                    >
                      {profile.profile.experience.role},{" "}
                      {profile.profile.experience.company}
                    </Typography>
                  </Box>
                  <Box className={classes.locationBox}>
                    <PlaceIcon />
                    <Typography
                      noWrap
                      variant="subtitle1"
                      className={classes.mentorLocation}
                    >
                      {profile.profile.country}
                    </Typography>
                  </Box>
                </Box>
                <Button
                  disableElevation
                  disableRipple
                  variant="contained"
                  onClick={() => handleViewProfile(profile.profile.sub)}
                  className={classes.viewProfileButton}
                >
                  View Profile
                </Button>
              </Box>
            </Card>
          ))}
        </Box>
      )}
    </>
  );
};

export default Profiles;
