import {
  Box,
  Card,
  Container,
  IconButton,
  Typography,
} from "@material-ui/core";
import { NavigateBefore } from "@material-ui/icons";
import React, { useEffect } from "react";
import useStyles from "./style";
import { v4 as uuid } from 'uuid';
import { useState } from "react";

const Testimony = () => {
  const classes = useStyles();
  const [testimonies, setTestimonies]  = useState( [
    {
      role: "MENTOR",
      testimony:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed sollicitudin justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      userName: "Jannet Dawn",
      title: "Software engineer, Microsoft",
      imageAlt: "Jannet_Dawn",
      imageUrl:
        "https://shementorsafrica-img.s3.amazonaws.com/Testimonies/testimony_sample2.png",
    },
    {
      role: "MENTEE",
      testimony:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed sollicitudin justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      userName: "Ingrid Mugeni",
      title: "Student, ALU",
      imageAlt: "Ingrid_Mugeni",
      imageUrl:
        "https://shementorsafrica-img.s3.amazonaws.com/Testimonies/testimony_sample1.png",
    },
    {
        role: "MENTOR",
        testimony:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed sollicitudin justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        userName: "Jannet Dawn",
        title: "Software engineer, Microsoft",
        imageAlt: "Jannet_Dawn",
        imageUrl:
          "https://shementorsafrica-img.s3.amazonaws.com/Testimonies/testimony_sample2.png",
      },
  ]);
  const [count, setCount] = useState(2);
  const handlePrev = () => {
      let removedElement = testimonies[0]; 
     setTestimonies(testimonies => [...testimonies.slice(1)]); 
     setTestimonies(testimonies => [...testimonies, removedElement])
 
  };
  useEffect(() => {
      if(window.innerWidth <=600){
          setCount(1)
      }
  }, [])
  return (
    <Container className={classes.container}>
      <IconButton
        onClick={handlePrev}
        size="medium"
        className={classes.carouselIcon}
      >
        <NavigateBefore />
      </IconButton>
      {testimonies.filter((testimony, index) => index <count).map((testimony) => {
        return (
          <Card className={classes.testimony} key={uuid()}>
            <Typography variant="h6" className={classes.role}>
              {testimony.role}
            </Typography>
            <Typography variant="body1" className={classes.body}>
              {testimony.testimony}
            </Typography>
            <Box className={classes.usersInfo}>
              <Box
                component="img"
                alt={testimony.imageAlt}
                src={testimony.imageUrl}
                className={classes.testimonyImg}
              />
              <div>
                <Typography variant="subtitle1" className={classes.subtitle}>
                  {testimony.userName}
                </Typography>
                <Typography variant="subtitle1" className={classes.subtitle2}>
                  {testimony.title}{" "}
                </Typography>
              </div>
            </Box>
          </Card>
        );
      })}
    </Container>
  );
};

export default Testimony;
