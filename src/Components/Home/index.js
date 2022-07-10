import { Container, Typography } from "@material-ui/core";
import { Box } from "@material-ui/core";
import useStyles from "./styles";
import { Link } from "react-router-dom";
import * as React from "react";
import { Button } from "@material-ui/core";

const Home = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container} disableGutters>
      <Box className={classes.homeImgBox}>
        <Box
          component="img"
          alt="Home page Image "
          className={classes.homeImg}
          src="https://shementorsafrica-img.s3.amazonaws.com/homePage.png"
        />
      </Box>

      <Box className={classes.info}>
        <Typography variant="h3" className={classes.header}>
          SHARE
          <Box component="span" className={classes.dot}>
            .
          </Box>
          LEARN
          <Box component="span" className={classes.dot}>
            .
          </Box>
          GROW
        </Typography>
        <Typography variant="body2" className={classes.body}>
          Our goal is to provide you with mentorship from experienced African
          women on how to build a career in tech. What we expect from you is to
          give back to the community as you benefit from the platform.
        </Typography>
        <Link to="/signup" className={classes.buttonLink}>
        <Button variant="contained" className={classes.homeButton}>
          Join us
        </Button>
        </Link>

      </Box>
    </Container>
  );
};

export default Home;
