import { Card, Container, IconButton, Typography } from "@material-ui/core";
import useStyles from "./styles";
import { Box } from "@material-ui/core";
import { useEffect } from "react";
import NavigateBefore from "@material-ui/icons/NavigateBefore";
import NavigateNext from "@material-ui/icons/NavigateNext";
import { useState } from "react";

const services = [
  {
    title: "MENTORSHIP",
    body: "Are you looking for a mentor? We provide you with a pool of African women mentors based on your industry to support you!",
  },
  {
    title: "COMMUNITY",
    body: "Are you facing any challenge that is limiting you from securing your first job ? Our community of mentors will assist you by providing you suggestion on how to handle it!",
  },
  {
    title: "RESOURCES",
    body: "Are you facing any challenge that is limiting you from securing your first job ? Our community of mentors will assist you by providing you suggestion on how to handle it!",
  },
];

const AboutUs = () => {
  const classes = useStyles();
  const [counterStart, setCounterStart] = useState(0);
  const [counterEnd, setCounterEnd] = useState(services.length );

  const handlePrev = () => {
    if (counterStart > 0) {
      setCounterStart((prev) => prev - 1);
      setCounterEnd((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (counterEnd < services.length) {
      setCounterEnd((prev) => prev + 1);
      setCounterStart((prev) => prev + 1);
    }
  };

  useEffect(() => {
    if (window.innerWidth <= 600) {
      setCounterEnd(1);
    }
  }, []);

  return (
    <Container className={classes.container} disableGutters>
      <Box className={classes.cardBox}>
        <IconButton
          onClick={handlePrev}
          size="medium"
          className={classes.carouselIcons}
        >
          <NavigateBefore />
        </IconButton>
        {services
          .filter(
            (service, index) => index >= counterStart && index < counterEnd
          )
          .map((service, index) => {
            return (
              <Card className={classes.card} key={index}>
                <Typography variant="h6" className={classes.title}>
                  {service.title}
                </Typography>
                <Typography variant="body1" className={classes.body}>
                  {service.body}
                </Typography>
              </Card>
            );
          })}
          <IconButton
          onClick={handleNext}
          size="medium"
          className={classes.carouselIcons}
        >
          <NavigateNext />
        </IconButton>
      </Box>
    </Container>
  );
};

export default AboutUs;
